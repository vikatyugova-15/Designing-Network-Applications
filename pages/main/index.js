import { ServicesBlock } from "../../components/service_block/index.js";
import { PageHeader } from "../../components/page_header/index.js";
import { getToasts } from "../../components/toasts/index.js";
import { setCurrentPage } from "../../main.js";
import { ServicesMock } from "./services.js";


export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.fetchData();
    }

    getHtml() {
        return (
            `
                <div class="container d-flex flex-column gap-4 py-5" id="main_page">
                    <div id="main_page_header"></div>
                    <div class="d-flex flex-column gap-1">
                        <h1 class="text-primary fs-1 fw-bold">RT-Bank</h1>
                        <p class="text-secondary">Добро пожаловать в РТ Банк! Мы рады приветствовать вас в нашем банке, который предлагает широкий спектр финансовых услуг и продуктов для удовлетворения ваших потребностей. Наша миссия - обеспечить вам надежные и инновационные решения для управления вашими финансами, чтобы вы могли достичь своих финансовых целей с уверенностью и комфортом.</p>
                    </div>
                </div>
            `
        );
    }

    get mainPageContainer() {
        return document.getElementById('main_page');
    }

    get pageHeaderContainer() {
        return document.getElementById("main_page_header");
    }

    fetchData() {
        this.services = ServicesMock;
    }

    onClick(service) {
        setCurrentPage(service.path);
    }

    onDelete(service) {
        this.services = this.services?.filter(s => s.id !== service.id);
        this.render();
        getToasts().showWarning(`Услуга "${service.title}" удалена из списка.`);
    }

    onAdd(service) {
        this.services = [...this.services, {...service, id: crypto.randomUUID()}];
        this.render();
        getToasts().showSuccess(`Услуга "${service.title}" добавлена в список.`);
    }

    render() {
        this.parent.innerHTML = '';

        const html = this.getHtml();
        this.parent.insertAdjacentHTML('beforeend', html);

        const pageHeader = new PageHeader(this.pageHeaderContainer, "main_page_header_block");
        pageHeader.render();

        const serviceCards = new ServicesBlock(
            this.mainPageContainer,
            this.onAdd.bind(this, ServicesMock[0]),
            this.onClick.bind(this),
            this.onDelete.bind(this)
        );
        serviceCards.render(this.services);
    }
}