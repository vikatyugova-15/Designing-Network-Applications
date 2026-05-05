import { PageHeader } from "../../components/page_header/index.js";
import { ServiceInfo } from "../../components/service_info/index.js";
import { ServiceModelViewer } from "../../components/service_model_viewer/index.js";
import { ajax } from "../../modules/ajax.js";
import { serviceUrls } from "../../modules/serviceUrls.js";
import { getToasts } from "../../components/toasts/index.js";

export class ServicePage {
    constructor(parent) {
        this.parent = parent;
        this.infoResult = new ServiceInfo();
        this.modelViewer = null;
        this.currentService = "insuranceService";
        this.serviceData = null;
    }

    setService(service) {
        this.currentService = String(service ?? '').trim() || "insuranceService";
    }

    get pageId() {
        return "service_page";
    }

    get defaultTitle() {
        return "Услуга";
    }

    get defaultDescription() {
        return "";
    }

    get defaultInfoTitle() {
        return "Информация";
    }

    get defaultInfoItems() {
        return ["Дополнительная информация отсутствует."];
    }

    get effectiveTitle() {
        return this.serviceData?.title ?? this.defaultTitle;
    }

    get effectiveDescription() {
        return this.serviceData?.description ?? this.defaultDescription;
    }

    get effectiveInfoTitle() {
        return this.serviceData?.infoTitle ?? this.defaultInfoTitle;
    }

    get effectiveInfoItems() {
        const fromServer = this.serviceData?.infoItems;
        if (Array.isArray(fromServer) && fromServer.length > 0) {
            return fromServer;
        }

        return this.defaultInfoItems;
    }

    get effectiveModelPath() {
        const modelPath = this.serviceData?.modelPath;
        return modelPath != null ? String(modelPath) : "";
    }

    getContentHtml() {
        return this.infoResult.getHtml(this.effectiveInfoTitle, this.effectiveInfoItems);
    }

    get pageHeaderId() {
        return `${this.pageId}_header`;
    }

    get pageHeaderContainer() {
        return document.getElementById(this.pageHeaderId);
    }

    get modelViewerId() {
        return `${this.pageId}_model_viewer`;
    }

    get modelViewerContainer() {
        return document.getElementById(this.modelViewerId);
    }

    get infoContainerId() {
        return `${this.pageId}_info`;
    }

    get infoContainer() {
        return document.getElementById(this.infoContainerId);
    }

    getHtml() {
        return (
            `
                <div class="container d-flex flex-column gap-4 py-5" id="${this.pageId}">
                    <div id="${this.pageHeaderId}"></div>
                    <div class="d-flex flex-column gap-1">
                        <h1 class="text-primary fs-1 fw-bold" id="service_page_title">${this.effectiveTitle}</h1>
                        <p class="text-secondary" id="service_page_description">${this.effectiveDescription}</p>
                    </div>
                    <div id="${this.infoContainerId}">${this.getContentHtml()}</div>
                    <div id="${this.modelViewerId}"></div>
                </div>
            `
        );
    }

    loadServiceData() {
        ajax.get(serviceUrls.getServiceByPath(this.currentService), (data, status) => {
            if (status === 0) {
                return;
            }

            if (status !== 200 || !data) {
                getToasts().showWarning('Не удалось загрузить данные услуги с сервера.');
                return;
            }

            this.serviceData = data;
            this.updatePageFromServiceData();
        });
    }

    updatePageFromServiceData() {
        const titleEl = document.getElementById('service_page_title');
        const descEl = document.getElementById('service_page_description');

        if (titleEl) titleEl.textContent = this.effectiveTitle;
        if (descEl) descEl.textContent = this.effectiveDescription;

        if (this.infoContainer) {
            this.infoContainer.innerHTML = this.getContentHtml();
        }

        this.renderModelViewer();

        const viewerId = `${this.pageId}_viewer_component`;
        const viewerCanvas = document.getElementById(`${viewerId}_canvas`);
        const viewerRoot = viewerCanvas?.closest('section');
        const viewerTitleEl = viewerRoot?.querySelector('h2');
        if (viewerTitleEl) {
            viewerTitleEl.textContent = `3D просмотр: ${this.effectiveTitle}`;
        }
    }

    renderModelViewer() {
        if (this.modelViewer) {
            this.modelViewer.destroy();
            this.modelViewer = null;
        }

        if (!this.modelViewerContainer) {
            return;
        }

        this.modelViewerContainer.innerHTML = "";

        const modelPath = this.effectiveModelPath;
        if (!modelPath) {
            return;
        }

        this.modelViewer = new ServiceModelViewer(this.modelViewerContainer, {
            viewerId: `${this.pageId}_viewer_component`,
            title: `3D просмотр: ${this.effectiveTitle}`,
            modelPath,
        });
        this.modelViewer.render();
    }

    render() {
        this.serviceData = null;

        this.parent.innerHTML = "";
        this.parent.insertAdjacentHTML("beforeend", this.getHtml());

        const pageHeader = new PageHeader(this.pageHeaderContainer, `${this.pageId}_header_block`);
        pageHeader.render();

        this.renderModelViewer();

        this.loadServiceData();
    }
}
