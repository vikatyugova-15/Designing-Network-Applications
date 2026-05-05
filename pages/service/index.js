import { PageHeader } from "../../components/page_header/index.js";
import { ServiceInfo } from "../../components/service_info/index.js";
import { ServiceModelViewer } from "../../components/service_model_viewer/index.js";
import { serviceConfig } from "./config.js";
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
        if (service in serviceConfig) {
            this.currentService = service;
        }
    }

    get currentConfig() {
        return serviceConfig[this.currentService];
    }

    get effectiveTitle() {
        return this.serviceData?.title ?? this.currentConfig.title;
    }

    get effectiveDescription() {
        return this.serviceData?.description ?? this.currentConfig.description;
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
                        <h1 class="text-primary fs-1 fw-bold" id="service_page_title">${this.effectiveTitle}</h1>
                        <p class="text-secondary" id="service_page_description">${this.effectiveDescription}</p>
                    </div>
                    ${this.getContentHtml()}
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

        const viewerId = `${this.currentConfig.pageId}_viewer_component`;
        const viewerCanvas = document.getElementById(`${viewerId}_canvas`);
        const viewerRoot = viewerCanvas?.closest('section');
        const viewerTitleEl = viewerRoot?.querySelector('h2');
        if (viewerTitleEl) {
            viewerTitleEl.textContent = `3D просмотр: ${this.effectiveTitle}`;
        }
    }

    render() {
        if (this.modelViewer) {
            this.modelViewer.destroy();
            this.modelViewer = null;
        }

        this.serviceData = null;

        this.parent.innerHTML = "";
        this.parent.insertAdjacentHTML("beforeend", this.getHtml());

        const pageHeader = new PageHeader(this.pageHeaderContainer, `${this.currentConfig.pageId}_header_block`);
        pageHeader.render();

        this.modelViewer = new ServiceModelViewer(this.modelViewerContainer, {
            viewerId: `${this.currentConfig.pageId}_viewer_component`,
            title: `3D просмотр: ${this.effectiveTitle}`,
            modelPath: this.currentConfig.modelPath,
        });
        this.modelViewer.render();

        this.loadServiceData();
    }
}
