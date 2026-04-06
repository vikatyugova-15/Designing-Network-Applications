import { Button } from "../button/index.js";
import { ServiceCard } from "../service_card/index.js";

export class ServicesBlock {
    constructor(parent, onAdd = () => {}, onClick = () => { }, onDelete = () => { }) {
        this.parent = parent;
        this.onAdd = onAdd;
        this.onClick = onClick;
        this.onDelete = onDelete;
        this.services = [];
    }

    getHtml() {
        return (
            `
                <div class="d-flex flex-column gap-3">
                    <div class="d-flex justify-content-between align-items-center flex-wrap gap-2" id="services_header">
                        <h2 class="text-primary fs-2 fw-medium">Наши услуги</h2>
                        <div id="services_header_controls" class="d-flex align-items-center gap-2"></div>
                    </div>

                    <input id="services_search" class="form-control" type="search" placeholder="Поиск по услугам...">

                    <div id="services_cards" class="d-grid gap-4"></div>
                </div>
            `
        );
    }

    get servicesHeader() {
        return document.getElementById(`services_header`);
    }

    get servicesContainer() {
        return document.getElementById('services_cards');
    }

    get headerControls() {
        return document.getElementById("services_header_controls");
    }

    get searchInput() {
        return document.getElementById("services_search");
    }

    getFilteredServices(query) {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) {
            return this.services;
        }

        return this.services.filter(service => {
            const title = String(service.title ?? "").toLowerCase();
            const description = String(service.description ?? "").toLowerCase();

            return title.includes(normalizedQuery) || description.includes(normalizedQuery);
        });
    }

    renderCards(services) {
        this.servicesContainer.innerHTML = "";

        if (services.length === 0) {
            this.servicesContainer.insertAdjacentHTML(
                "beforeend",
                '<p class="text-secondary mb-0">Ничего не найдено по вашему запросу.</p>'
            );
            return;
        }

        services.forEach(service => {
            const serviceCard = new ServiceCard(this.servicesContainer);
            serviceCard.render(service, this.onClick, this.onDelete);
        });
    }

    onSearch(event) {
        const filteredServices = this.getFilteredServices(event.target.value);
        this.renderCards(filteredServices);
    }

    render(services) {
        this.services = Array.isArray(services) ? services : [];

        const html = this.getHtml();
        this.parent.insertAdjacentHTML('beforeend', html);
        
        const addButton = new Button(this.headerControls, "Добавить", this.onAdd);
        addButton.render();

        this.renderCards(this.services);

        this.searchInput?.addEventListener("input", this.onSearch.bind(this));
    }
} 