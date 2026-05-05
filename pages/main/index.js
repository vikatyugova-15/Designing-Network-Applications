import { ServicesBlock } from "../../components/service_block/index.js"; 
import { PageHeader } from "../../components/page_header/index.js"; 
import { getToasts } from "../../components/toasts/index.js"; 
import { setCurrentPage } from "../../main.js"; 
import { ServicesMock } from "./services.js"; 
import { ajax } from "../../modules/ajax.js"; 
import { serviceUrls } from "../../modules/serviceUrls.js"; 
 
 
export class MainPage { 
    constructor(parent) {
        this.parent = parent;
        this.currentPage = 1;
        this.limit = 3;
        this.total = 0;
        this.currentQuery = '';
        this.searchDraft = '';
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
                    <div id="main_service_block"></div>
                    <nav class="d-flex justify-content-center">
                        <div class="d-flex align-items-center gap-3" id="services_pagination_nav">
                            <button class="btn btn-outline-primary" id="page_prev_btn" type="button" aria-label="Предыдущая страница">←</button>
                            <div class="text-primary fw-semibold" id="page_indicator" aria-live="polite"></div>
                            <button class="btn btn-outline-primary" id="page_next_btn" type="button" aria-label="Следующая страница">→</button>
                        </div>
                    </nav>
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

    get serviceBlock() {
        return document.getElementById("main_service_block"); 
    }
 
    fetchData(query = '', page = 1) {
        this.currentQuery = query;
        this.currentPage = page;
        ajax.get(serviceUrls.getServices(query, page, this.limit), (data, status) => {
            if (status === 200 && data) {
                this.services = data.items;
                this.total = data.total;
                this.renderCards();
            }
        });
    }

    renderCards() {
        this.serviceBlock.innerHTML = '';
        this.currentServicesBlock = new ServicesBlock(
            this.serviceBlock,
            this.onAdd.bind(this, this.services.length > 0 ? this.services[0] : ServicesMock[0]),
            this.onCreatePageOpen.bind(this),
            this.onClick.bind(this),
            this.onDelete.bind(this),
            this.onEditPageOpen.bind(this),
            this.onSearchSubmit.bind(this),
            this.searchDraft,
            this.onSearchDraftChange.bind(this),
            this.limit,
            this.onPageSizeChange.bind(this)
        );
        this.currentServicesBlock.render(this.services);
        this.renderPagination();
    }
 
    onClick(service) { 
        setCurrentPage(service.path); 
    } 

    onCreatePageOpen() {
        sessionStorage.setItem('serviceEditor.mode', 'create');
        sessionStorage.removeItem('serviceEditor.service');
        setCurrentPage('serviceEditor');
    }

    onEditPageOpen(service) {
        sessionStorage.setItem('serviceEditor.mode', 'edit');
        sessionStorage.setItem('serviceEditor.service', JSON.stringify(service ?? {}));
        setCurrentPage('serviceEditor');
    }
 
    onDelete(service) { 
        ajax.delete(serviceUrls.removeServiceById(service.id), (data, status) => {
            if (status === 0) return;

            if (status === 204) {
                const newTotal = Math.max(0, (this.total ?? 0) - 1);
                const newTotalPages = Math.max(1, Math.ceil(newTotal / this.limit));
                const targetPage = Math.min(this.currentPage, newTotalPages);
                this.fetchData(this.currentQuery, targetPage);
                getToasts().showWarning(`Услуга "${service.title}" удалена из списка.`);
                return;
            }

            getToasts().showWarning(`Не удалось удалить услугу "${service.title}".`);
        });
    }

    onPageChange(page) {
        this.fetchData(this.currentQuery, page);
    }

    onAdd(service) { 
        const payload = {
            path: service?.path,
            title: service?.title,
            description: service?.description,
            image: service?.image,
            secondTaskText: service?.secondTaskText,
        };

        ajax.post(serviceUrls.createService(), payload, (created, status) => {
            if (status === 0) return;

            if (status === 201) {
                const hasQuery = String(this.currentQuery ?? '').trim().length > 0;
                if (hasQuery) {
                    this.fetchData(this.currentQuery, 1);
                } else {
                    const newTotal = (this.total ?? 0) + 1;
                    const lastPage = Math.max(1, Math.ceil(newTotal / this.limit));
                    this.fetchData(this.currentQuery, lastPage);
                }
                getToasts().showSuccess(`Услуга "${payload.title}" добавлена в список.`);
                return;
            }

            getToasts().showWarning(`Не удалось добавить услугу "${payload.title}".`);
        });
    } 

    onSearchDraftChange(draft) {
        this.searchDraft = String(draft ?? '');
    }

    onSearchSubmit(query) {
        const appliedQuery = String(query ?? '').trim();
        this.currentQuery = appliedQuery;
        this.fetchData(appliedQuery, 1);
    }

    onPageSizeChange(nextLimit) {
        const parsed = Number.parseInt(String(nextLimit ?? ''), 10);
        const safeLimit = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
        if (safeLimit === this.limit) return;

        this.limit = safeLimit;
        this.fetchData(this.currentQuery, 1);
    }

    renderPagination() {
        const totalPages = Math.max(1, Math.ceil((this.total ?? 0) / this.limit));
        const nav = document.getElementById('services_pagination_nav');
        const prevBtn = document.getElementById('page_prev_btn');
        const nextBtn = document.getElementById('page_next_btn');
        const indicator = document.getElementById('page_indicator');

        if (!nav || !prevBtn || !nextBtn || !indicator) return;

        if (totalPages <= 1) {
            nav.classList.add('d-none');
            return;
        }

        nav.classList.remove('d-none');

        indicator.textContent = String(this.currentPage);
        prevBtn.disabled = this.currentPage <= 1;
        nextBtn.disabled = this.currentPage >= totalPages;

        prevBtn.onclick = () => {
            if (this.currentPage <= 1) return;
            this.onPageChange(this.currentPage - 1);
        };

        nextBtn.onclick = () => {
            if (this.currentPage >= totalPages) return;
            this.onPageChange(this.currentPage + 1);
        };
    }
 
    render() { 
        this.parent.innerHTML = ''; 
 
        const html = this.getHtml(); 
        this.parent.insertAdjacentHTML('beforeend', html); 
 
        const pageHeader = new PageHeader(this.pageHeaderContainer, "main_page_header_block"); 
        pageHeader.render(); 
 
        this.fetchData(); 
    } 
}