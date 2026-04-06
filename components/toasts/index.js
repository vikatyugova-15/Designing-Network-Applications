import { Toast } from "../toast/index.js";

export class Toasts {
	constructor(parent = document.body) {
		this.parent = parent;
		this.containerId = "global_toasts_container";
	}

	get container() {
		return document.getElementById(this.containerId);
	}

	render() {
		if (this.container) {
			return this.container;
		}

		this.parent.insertAdjacentHTML(
			"beforeend",
			`<div id="${this.containerId}" class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1080;"></div>`
		);

		return this.container;
	}

	show(message, options = {}) {
		const toast = new Toast(this.render(), {
			message,
			...options,
		});

		toast.render();
	}

	showSuccess(message, title = "Успешно") {
		this.show(message, { title, type: "success" });
	}

	showError(message, title = "Ошибка") {
		this.show(message, { title, type: "error" });
	}

	showInfo(message, title = "Информация") {
		this.show(message, { title, type: "info" });
	}

	showWarning(message, title = "Внимание") {
		this.show(message, { title, type: "warning" });
	}
}

let toastsInstance;

export const getToasts = () => {
	if (!toastsInstance) {
		toastsInstance = new Toasts();
	}

	return toastsInstance;
};
