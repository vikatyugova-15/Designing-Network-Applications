import { PageHeader } from "../../components/page_header/index.js";
import { ServiceInfo } from "../../components/service_info/index.js";
import { ServiceModelViewer } from "../../components/service_model_viewer/index.js";
import { serviceConfig } from "./config.js";

export class ServicePage {
    constructor(parent) {
        this.parent = parent;
        this.infoResult = new ServiceInfo();
        this.modelViewer = null;
        this.currentService = "insuranceService";
    }

    setService(service) {
        if (service in serviceConfig) {
            this.currentService = service;
        }
    }

    get currentConfig() {
        return serviceConfig[this.currentService];
    }

    getContentHtml() {
        return this.infoResult.getHtml(this.currentConfig.infoTitle, this.currentConfig.infoItems);
    }

    get pageHeaderId() {
        return `${this.currentConfig.pageId}_header`;
    }

    get pageHeaderContainer() {
        return document.getElementById(this.pageHeaderId);
    }

    get modelViewerId() {
        return `${this.currentConfig.pageId}_model_viewer`;
    }

    get modelViewerContainer() {
        return document.getElementById(this.modelViewerId);
    }

    getHtml() {
        return (
            `
                <div class="container d-flex flex-column gap-4 py-5" id="${this.currentConfig.pageId}">
                    <div id="${this.pageHeaderId}"></div>
                    <div class="d-flex flex-column gap-1">
                        <h1 class="text-primary fs-1 fw-bold">${this.currentConfig.title}</h1>
                        <p class="text-secondary">${this.currentConfig.description}</p>
                    </div>
                    ${this.getContentHtml()}
                    <div id="${this.modelViewerId}"></div>
                </div>
            `
        );
    }

    render() {
        if (this.modelViewer) {
            this.modelViewer.destroy();
            this.modelViewer = null;
        }

        this.parent.innerHTML = "";
        this.parent.insertAdjacentHTML("beforeend", this.getHtml());

        const pageHeader = new PageHeader(this.pageHeaderContainer, `${this.currentConfig.pageId}_header_block`);
        pageHeader.render();

        this.modelViewer = new ServiceModelViewer(this.modelViewerContainer, {
            viewerId: `${this.currentConfig.pageId}_viewer_component`,
            title: `3D просмотр: ${this.currentConfig.title}`,
            modelPath: this.currentConfig.modelPath,
        });
        this.modelViewer.render();
    }
}
