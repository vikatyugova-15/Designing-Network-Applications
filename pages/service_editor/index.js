import { PageHeader } from "../../components/page_header/index.js";
import { Button } from "../../components/button/index.js";
import { ajax } from "../../modules/ajax.js";
import { serviceUrls } from "../../modules/serviceUrls.js";
import { getToasts } from "../../components/toasts/index.js";
import { setCurrentPage } from "../../main.js";

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
            infoTitle: "",
            infoItemsText: "",
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
            const infoItems = Array.isArray(parsed?.infoItems) ? parsed.infoItems : [];
            this.serviceDraft = {
                id: parsed?.id ?? "",
                path: parsed?.path ?? "",
                title: parsed?.title ?? "",
                description: parsed?.description ?? "",
                image: parsed?.image ?? "",
                secondTaskText: parsed?.secondTaskText ?? "",
                infoTitle: parsed?.infoTitle ?? "",
                infoItemsText: infoItems.map((v) => String(v ?? '').trim()).filter(Boolean).join("\n"),
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

    get actionsContainerId() {
        return `${this.pageId}_actions`;
    }

    get actionsContainer() {
        return document.getElementById(this.actionsContainerId);
    }

    readDraftFromForm() {
        const getValue = (id) => String(document.getElementById(id)?.value ?? '').trim();

        return {
            id: getValue('service_editor_id'),
            path: getValue('service_editor_path'),
            title: getValue('service_editor_title'),
            description: getValue('service_editor_description'),
            image: getValue('service_editor_image'),
            secondTaskText: getValue('service_editor_second_task_text'),
            infoTitle: getValue('service_editor_info_title'),
            infoItemsText: String(document.getElementById('service_editor_info_items')?.value ?? ''),
        };
    }

    validateDraft(draft) {
        const requiredFields = [
            { key: 'path', label: 'Path' },
            { key: 'title', label: 'Название' },
            { key: 'description', label: 'Описание' },
            { key: 'image', label: 'Image' },
            { key: 'secondTaskText', label: 'Second Task Text' },
        ];

        const missing = requiredFields
            .filter(({ key }) => !String(draft?.[key] ?? '').trim())
            .map(({ label }) => label);

        return missing;
    }

    onSave() {
        const draft = this.readDraftFromForm();
        const missing = this.validateDraft(draft);
        if (missing.length > 0) {
            getToasts().showWarning(`Заполните поля: ${missing.join(', ')}`);
            return;
        }

        const infoItems = String(draft.infoItemsText ?? '')
            .split(/\r?\n/)
            .map((v) => String(v ?? '').trim())
            .filter(Boolean);

        const payload = {
            path: draft.path,
            title: draft.title,
            description: draft.description,
            image: draft.image,
            secondTaskText: draft.secondTaskText,
            infoTitle: String(draft.infoTitle ?? '').trim(),
            infoItems,
        };

        if (this.mode === 'edit') {
            const id = Number.parseInt(String(draft.id ?? ''), 10);
            if (!Number.isFinite(id) || id <= 0) {
                getToasts().showWarning('Не удалось определить ID услуги для редактирования.');
                return;
            }

            ajax.patch(serviceUrls.updateServiceById(id), payload, (data, status) => {
                if (status === 0) return;

                if (status === 200) {
                    getToasts().showSuccess(`Услуга "${payload.title}" сохранена.`);
                    sessionStorage.removeItem('serviceEditor.mode');
                    sessionStorage.removeItem('serviceEditor.service');
                    // После редактирования перейти на главную страницу на страницу, где находится карточка
                    sessionStorage.setItem('main.navigateTo', JSON.stringify({ path: payload.path }));
                    setCurrentPage('main');
                    return;
                }

                getToasts().showWarning(`Не удалось сохранить услугу "${payload.title}".`);
            });
            return;
        }

        ajax.post(serviceUrls.createService(), payload, (data, status) => {
            if (status === 0) return;

            if (status === 201 && data && data.path) {
                getToasts().showSuccess(`Услуга "${payload.title}" создана.`);
                sessionStorage.removeItem('serviceEditor.mode');
                sessionStorage.removeItem('serviceEditor.service');
                // После создания перейти на главную страницу на страницу, где находится карточка
                sessionStorage.setItem('main.navigateTo', JSON.stringify({ path: data.path }));
                setCurrentPage('main');
                return;
            }
            // fallback если data.path нет
            if (status === 201) {
                getToasts().showSuccess(`Услуга "${payload.title}" создана.`);
                sessionStorage.removeItem('serviceEditor.mode');
                sessionStorage.removeItem('serviceEditor.service');
                sessionStorage.setItem('main.navigateTo', JSON.stringify({ path: payload.path }));
                setCurrentPage('main');
                return;
            }

            getToasts().showWarning(`Не удалось создать услугу "${payload.title}".`);
        });
    }

    getHtml() {
        return `
            <div class="container d-flex flex-column gap-4 py-5" id="${this.pageId}">
                <div id="${this.pageHeaderId}"></div>

                <div class="d-flex flex-column gap-1">
                    <h1 class="text-primary fs-1 fw-bold mb-0">${this.title}</h1>
                    <p class="text-secondary mb-0">Заполните поля карточки услуги и нажмите "Сохранить".</p>
                </div>

                <form class="card p-4 border-0 shadow-sm d-flex flex-column gap-3" autocomplete="off" onsubmit="return false;">
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
                        <input class="form-control" id="service_editor_image" type="text" value="${String(this.serviceDraft.image ?? "")}" placeholder="/images/insurance.png">
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_second_task_text">Second Task Text</label>
                        <input class="form-control" id="service_editor_second_task_text" type="text" value="${String(this.serviceDraft.secondTaskText ?? "")}" placeholder="Страховка и автомобиль">
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_info_title">Заголовок дополнительной информации</label>
                        <input class="form-control" id="service_editor_info_title" type="text" value="${String(this.serviceDraft.infoTitle ?? "")}" placeholder="Информация">
                    </div>

                    <div>
                        <label class="form-label" for="service_editor_info_items">Пункты дополнительной информации</label>
                        <textarea class="form-control" id="service_editor_info_items" rows="4" placeholder="Каждый пункт с новой строки">${String(this.serviceDraft.infoItemsText ?? "")}</textarea>
                        <div class="form-text">Каждый пункт выводится отдельной строкой на странице "Подробнее".</div>
                    </div>

                    <div class="d-flex justify-content-end gap-2 pt-2" id="${this.actionsContainerId}"></div>
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

        const saveButton = new Button(this.actionsContainer, 'Сохранить', this.onSave.bind(this), 'primary');
        saveButton.render();
    }
}
