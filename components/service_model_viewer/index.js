import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Button } from "../button/index.js";

export class ServiceModelViewer {
    constructor(parent, options = {}) {
        this.parent = parent;
        this.viewerId = options.viewerId ?? "service_model_viewer";
        this.title = options.title ?? "Просмотр 3D-модели";
        this.modelPath = options.modelPath ?? "";

        this.renderer = null;
        this.scene = null;
        this.camera = null;
        this.controls = null;
        this.animationFrameId = null;
        this.onResizeBound = this.onResize.bind(this);

        this.animate = this.animate.bind(this);
    }

    get canvasId() {
        return `${this.viewerId}_canvas`;
    }

    get canvas() {
        return document.getElementById(this.canvasId);
    }

    get errorId() {
        return `${this.viewerId}_error`;
    }

    get errorElement() {
        return document.getElementById(this.errorId);
    }

    get zoomInContainerId() {
        return `${this.viewerId}_zoom_in`;
    }

    get zoomOutContainerId() {
        return `${this.viewerId}_zoom_out`;
    }

    get frontViewContainerId() {
        return `${this.viewerId}_front`;
    }

    get backViewContainerId() {
        return `${this.viewerId}_back`;
    }

    get leftViewContainerId() {
        return `${this.viewerId}_left`;
    }

    get rightViewContainerId() {
        return `${this.viewerId}_right`;
    }

    getHtml() {
        return (
            `
                <section class="card p-4 border-0 shadow-sm">
                    <div class="d-flex flex-column gap-3">
                        <h2 class="fs-5 fw-semibold mb-0">${this.title}</h2>
                        <p class="text-secondary mb-0">Путь модели: ${this.modelPath}</p>
                        <canvas id="${this.canvasId}" class="service-model-viewer-canvas"></canvas>
                        <div id="${this.errorId}" class="text-danger small"></div>

                        <div class="d-flex flex-wrap gap-2">
                            <div id="${this.zoomInContainerId}"></div>
                            <div id="${this.zoomOutContainerId}"></div>
                        </div>

                        <div class="d-flex flex-wrap gap-2">
                            <div id="${this.frontViewContainerId}"></div>
                            <div id="${this.backViewContainerId}"></div>
                            <div id="${this.leftViewContainerId}"></div>
                            <div id="${this.rightViewContainerId}"></div>
                        </div>
                    </div>
                </section>
            `
        );
    }

    renderButton(containerId, text, onClick) {
        const container = document.getElementById(containerId);
        if (!container) {
            return;
        }

        const button = new Button(container, text, onClick, "outline-primary");
        button.render();
    }

    renderControls() {
        this.renderButton(this.zoomInContainerId, "+", this.zoomIn.bind(this));
        this.renderButton(this.zoomOutContainerId, "-", this.zoomOut.bind(this));
        this.renderButton(this.frontViewContainerId, "Вид спереди", () => this.setCameraDirection("front"));
        this.renderButton(this.backViewContainerId, "Вид сзади", () => this.setCameraDirection("back"));
        this.renderButton(this.leftViewContainerId, "Вид слева", () => this.setCameraDirection("left"));
        this.renderButton(this.rightViewContainerId, "Вид справа", () => this.setCameraDirection("right"));
    }

    setError(text = "") {
        if (this.errorElement) {
            this.errorElement.textContent = text;
        }
    }

    normalizeModelToFloor(model) {
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        model.position.x -= center.x;
        model.position.z -= center.z;
        model.position.y -= box.min.y;

        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
            model.scale.multiplyScalar(2.2 / maxDim);
        }
    }

    focusCameraOnModel(model) {
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z, 1);
        this.controls.target.copy(center);
        this.camera.position.set(center.x, center.y + maxDim * 0.8, center.z + maxDim * 1.8);
        this.camera.near = 0.1;
        this.camera.far = 1000;
        this.camera.updateProjectionMatrix();
        this.controls.update();
    }

    loadModel() {
        if (!this.modelPath) {
            this.setError("Путь до модели не задан.");
            return;
        }

        const loader = new GLTFLoader();
        loader.load(
            encodeURI(this.modelPath),
            (gltf) => {
                const model = gltf.scene;
                this.normalizeModelToFloor(model);
                this.scene.add(model);
                this.focusCameraOnModel(model);
                this.setError("");
            },
            undefined,
            () => {
                this.setError("Не удалось загрузить модель по указанному пути.");
            }
        );
    }

    zoomIn() {
        if (!this.camera || !this.controls) {
            return;
        }

        const direction = new THREE.Vector3().subVectors(this.camera.position, this.controls.target).normalize();
        this.camera.position.addScaledVector(direction, -0.5);
        this.controls.update();
    }

    zoomOut() {
        if (!this.camera || !this.controls) {
            return;
        }

        const direction = new THREE.Vector3().subVectors(this.camera.position, this.controls.target).normalize();
        this.camera.position.addScaledVector(direction, 0.5);
        this.controls.update();
    }

    setCameraDirection(direction) {
        if (!this.camera || !this.controls) {
            return;
        }

        const target = this.controls.target.clone();
        const distance = this.camera.position.distanceTo(target);
        let x = target.x;
        let y = target.y + 1;
        let z = target.z;

        if (direction === "front") {
            z += distance;
        }

        if (direction === "back") {
            z -= distance;
        }

        if (direction === "left") {
            x -= distance;
        }

        if (direction === "right") {
            x += distance;
        }

        this.camera.position.set(x, y, z);
        this.controls.update();
    }

    onResize() {
        if (!this.renderer || !this.camera || !this.canvas) {
            return;
        }

        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;

        if (width === 0 || height === 0) {
            return;
        }

        this.renderer.setSize(width, height, false);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    animate() {
        if (!this.renderer || !this.scene || !this.camera || !this.controls) {
            return;
        }

        this.animationFrameId = requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    initThree() {
        if (!this.canvas) {
            return;
        }

        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xe6ebf5);

        this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
        this.camera.position.set(0, 2, 5);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;

        this.scene.add(new THREE.AmbientLight(0xffffff, 0.7));
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(4, 10, 8);
        this.scene.add(directionalLight);

        const grid = new THREE.GridHelper(12, 12, 0x9bb8ab, 0xc8dcd3);
        this.scene.add(grid);

        this.loadModel();
        this.onResize();
        this.animate();

        window.addEventListener("resize", this.onResizeBound);
    }

    render() {
        this.parent.insertAdjacentHTML("beforeend", this.getHtml());
        this.renderControls();
        this.initThree();
    }

    destroy() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }

        window.removeEventListener("resize", this.onResizeBound);

        if (this.controls) {
            this.controls.dispose();
            this.controls = null;
        }

        if (this.renderer) {
            this.renderer.dispose();
            this.renderer = null;
        }

        this.scene = null;
        this.camera = null;
    }
}
