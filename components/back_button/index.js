import { Button } from "../button/index.js";
import { setCurrentPage } from "../../main.js";

export class BackButton {
    constructor(parent) {
        this.parent = parent;
    }

    onClick() {
        setCurrentPage("main");
    }

    render() {
        const button = new Button(this.parent, 'Домой', this.onClick.bind(this));
        button.render();
    }
}