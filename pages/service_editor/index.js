import { PageHeader } from "../../components/page_header/index.js";

export class ServiceEditorPage {
    constructor(parent) {
        this.parent = parent;
        this.mode = "create"; // create | edit
        this.serviceDraft = {
            id: "",
            path: "",
            title: "",
            description: "",
            image: "",
            secondTaskText: "",
        };
    }

    loadContextFromSession() {
        const mode = sessionStorage.getItem("serviceEditor.mode");
        const raw = sessionStorage.getItem("serviceEditor.service");

        this.mode = mode === "edit" ? "edit" : "create";

        if (!raw) {
            return;
        }

        try {
            const parsed = JSON.parse(raw);
            this.serviceDraft = {
                id: parsed?.id ?? "",
                path: parsed?.path ?? "",
                title: parsed?.title ?? "",
                description: parsed?.description ?? "",
                image: parsed?.image ?? "",
                secondTaskText: parsed?.secondTaskText ?? "",
            };
        } catch {
            // ignore invalid JSON
        }
    }

    get title() {
        return this.mode === "edit" ? "Редактирование услуги" : "Создание услуги";
    }

    get pageId() {
        return "service_editor_page";
    }

    get pageHeaderId() {
        return `${this.pageId}_header`;
    }

    get pageHeaderContainer() {
        return document.getElementById(this.pageHeaderId);
    }

    getHtml() {
        return `
            <div class="container d-flex flex-column gap-4 py-5" id="${this.pageId}">
                <div id="${this.pageHeaderId}"></div>

                <div class="d-flex flex-column gap-1">
                    <h1 class="text-primary fs-1 fw-bold mb-0">${this.title}</h1>
                    <p class="text-secondary mb-0">Заполните поля карточки услуги. Кнопка сохранения будет добавлена позже.</p>
                </div>

                <form class="card p-4 border-0 shadow-sm d-flex flex-column gap-3" autocomplete="off">
                    <div>
                        <label class="form-label" for="service_editor_id">ID</label>
                        <input class="form-control" id="service_editor_id" type="text" value="${String(this.serviceDraft.id ?? "")}" disabled>
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_path">Path</label>
                        <input class="form-control" id="service_editor_path" type="text" value="${String(this.serviceDraft.path ?? "")}" placeholder="insuranceService">
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_title">Название</label>
                        <input class="form-control" id="service_editor_title" type="text" value="${String(this.serviceDraft.title ?? "")}" placeholder="Страховка">
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_description">Описание</label>
                        <textarea class="form-control" id="service_editor_description" rows="4" placeholder="Описание услуги">${String(this.serviceDraft.description ?? "")}</textarea>
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_image">Image</label>
                        <input class="form-control" id="service_editor_image" type="text" value="${String(this.serviceDraft.image ?? "")}" placeholder="/public/images/insurance.png">
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_second_task_text">Second Task Text</label>
                        <input class="form-control" id="service_editor_second_task_text" type="text" value="${String(this.serviceDraft.secondTaskText ?? "")}" placeholder="Страховка и автомобиль">
                    </div>
                </form>
            </div>
        `;
    }

    render() {
        this.loadContextFromSession();

        this.parent.innerHTML = "";
        this.parent.insertAdjacentHTML("beforeend", this.getHtml());

        const pageHeader = new PageHeader(this.pageHeaderContainer, `${this.pageId}_header_block`);
        pageHeader.render();
    }
}
