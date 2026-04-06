import { setCurrentPage } from "../../main.js";
import { BackButton } from "../back_button/index.js";

export class PageHeader {
    constructor(parent, headerId = "page_header") {
        this.parent = parent;
        this.headerId = headerId;
    }

    get homeButtonId() {
        return `${this.headerId}_home_button`;
    }

    get homeButtonContainer() {
        return document.getElementById(this.homeButtonId);
    }

    onHomeClick() {
        setCurrentPage("main");
    }

    getHtml() {
        return (
            `
                <header class="d-flex justify-content-between align-items-center flex-wrap gap-2 bg-white rounded-3 border px-3 py-2">
                <div id="${this.homeButtonId}"></div>
                    <h2 class="text-primary fs-3 fw-bold mb-0">RT-Bank</h2>
                </header>
            `
        );
    }

    render() {
        this.parent.insertAdjacentHTML("beforeend", this.getHtml());

        const homeButton = new BackButton(this.homeButtonContainer);
        homeButton.render();
    }
}
