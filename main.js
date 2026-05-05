import { getToasts } from "./components/toasts/index.js";
import { MainPage } from "./pages/main/index.js";
import { ServicePage } from "./pages/service/index.js";
import { ServiceEditorPage } from "./pages/service_editor/index.js";

const root = document.querySelector('#root');
getToasts().render();

const servicePage = new ServicePage(root);
const serviceRoutes = ["annuitetService", "differentiatedService", "insuranceService"];

const pages = {
    main: new MainPage(root),
    service: servicePage,
    serviceEditor: new ServiceEditorPage(root),
};

let currentPage = "main";
const renderPage = (page) => {
    if (serviceRoutes.includes(page)) {
        servicePage.setService(page);
        pages.service.render();
        return;
    }

    if (page in pages) {
        pages[page].render();
    }
}

renderPage(currentPage);

export const setCurrentPage = (page) => {
    currentPage = page;
    renderPage(currentPage);
}
