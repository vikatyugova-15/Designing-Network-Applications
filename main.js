import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/globals.css";

import { getToasts } from "./components/toasts/index.js";
import { MainPage } from "./pages/main/index.js";
import { ServicePage } from "./pages/service/index.js";
import { ServiceEditorPage } from "./pages/service_editor/index.js";

const root = document.querySelector('#root');
getToasts().render();

const servicePage = new ServicePage(root);
const pages = {
    main: new MainPage(root),
    serviceEditor: new ServiceEditorPage(root),
};

let currentPage = "main";
const renderPage = (page) => {
    // Если page - это строка и не main/serviceEditor, считаем это path услуги
    if (typeof page === "string" && page !== "main" && page !== "serviceEditor") {
        servicePage.setService(page);
        servicePage.render();
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
