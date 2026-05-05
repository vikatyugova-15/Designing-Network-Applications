import { Button } from "../button/index.js";
import { ServiceCard } from "../service_card/index.js";

export class ServicesBlock {
    constructor(
        parent,
        onCreatePageOpen = () => {},
        onClick = () => {},
        onDelete = () => {},
        onEditPageOpen = () => {},
        onSearchRequest = () => {},
        searchDraft = '',
        onSearchDraftChange = () => {},
        pageSize = 3,
        onPageSizeChange = () => {}
    ) {
        this.parent = parent;
        this.onCreatePageOpen = onCreatePageOpen;
        this.onClick = onClick;
        this.onDelete = onDelete;
        this.onEditPageOpen = onEditPageOpen;
        this.onSearchRequest = onSearchRequest;
        this.onSearchDraftChange = onSearchDraftChange;
        this.searchDraft = String(searchDraft ?? '');
        this.pageSize = Number(pageSize) || 1;
        this.onPageSizeChange = onPageSizeChange;
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

                    <div class="d-flex align-items-stretch gap-2">
                        <input id="services_search" class="form-control flex-grow-1" type="search" placeholder="Поиск по услугам..." aria-label="Поиск по услугам">
                        <button class="btn btn-outline-primary" id="services_search_btn" type="button">Найти</button>
                    </div>

                    <div id="services_cards" class="d-grid gap-4"></div>
                </div>
            `
        );
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

    get searchButton() {
        return document.getElementById("services_search_btn");
    }

    get pageSizeInput() {
        return document.getElementById("services_page_size");
    }

    renderCards(services) {
        this.servicesContainer.innerHTML = "";

        if (!services || services.length === 0) {
            this.servicesContainer.insertAdjacentHTML(
                "beforeend",
                '<p class="text-secondary mb-0">Ничего не найдено по вашему запросу.</p>'
            );
            return;
        }

        services.forEach(service => {
            const serviceCard = new ServiceCard(this.servicesContainer);
            serviceCard.render(service, this.onClick, this.onDelete, this.onEditPageOpen);
        });
    }

    onSearchDraftInput(event) {
        const draft = String(event.target.value ?? '');
        this.searchDraft = draft;
        this.onSearchDraftChange(draft);
    }

    onSearchSubmit() {
        const query = String(this.searchInput?.value ?? '').trim();
        this.onSearchRequest(query);
    }

    onPageSizeChangeEvent(event) {
        const rawValue = event?.target?.value;
        const parsed = Number.parseInt(String(rawValue ?? ''), 10);
        const next = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;

        this.pageSize = next;
        if (this.pageSizeInput) this.pageSizeInput.value = String(next);
        this.onPageSizeChange(next);
    }

    render(services) {
        this.services = Array.isArray(services) ? services : [];

        const html = this.getHtml();
        this.parent.insertAdjacentHTML('beforeend', html);

        this.headerControls?.insertAdjacentHTML(
            'beforeend',
            `
                <div class="d-flex align-items-center gap-2">
                    <label for="services_page_size" class="text-secondary mb-0">На странице</label>
                    <input
                        id="services_page_size"
                        class="form-control form-control-sm w-auto"
                        type="number"
                        min="1"
                        step="1"
                        value="${this.pageSize}"
                        aria-label="Количество карточек на странице"
                    >
                </div>
            `
        );

        const createButton = new Button(this.headerControls, "Создать", this.onCreatePageOpen, 'primary');
        createButton.render();

        this.renderCards(this.services);

        if (this.searchInput) {
            this.searchInput.value = this.searchDraft;
            this.searchInput.addEventListener("input", this.onSearchDraftInput.bind(this));
        }

        this.searchButton?.addEventListener("click", this.onSearchSubmit.bind(this));

        this.pageSizeInput?.addEventListener("change", this.onPageSizeChangeEvent.bind(this));
    }
}