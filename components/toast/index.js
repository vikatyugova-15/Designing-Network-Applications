const TOAST_BG_CLASS_BY_TYPE = {
	info: "text-bg-primary",
	success: "text-bg-success",
	warning: "text-bg-warning",
	error: "text-bg-danger",
};

const CLOSE_BUTTON_CLASS_BY_TYPE = {
	info: "btn-close-white",
	success: "btn-close-white",
	warning: "",
	error: "btn-close-white",
};

export class Toast {
	constructor(parent, options = {}) {
		this.parent = parent;
		this.type = options.type ?? "info";
		this.title = options.title ?? "Уведомление";
		this.message = options.message ?? "";
		this.delay = options.delay ?? 3500;
	}

	get backgroundClass() {
		return TOAST_BG_CLASS_BY_TYPE[this.type] ?? TOAST_BG_CLASS_BY_TYPE.info;
	}

	get closeButtonClass() {
		return CLOSE_BUTTON_CLASS_BY_TYPE[this.type] ?? CLOSE_BUTTON_CLASS_BY_TYPE.info;
	}

	getHtml(toastId) {
		return (
			`
				<div id="${toastId}" class="toast align-items-center border-0 ${this.backgroundClass}" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="${this.delay}">
					<div class="d-flex">
						<div class="toast-body">
							<strong class="me-2">${this.title}</strong>
							<span>${this.message}</span>
						</div>
						<button type="button" class="btn-close ${this.closeButtonClass} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
					</div>
				</div>
			`
		);
	}

	render() {
		if (!this.parent) {
			return;
		}

		const toastId = `toast_${crypto.randomUUID()}`;
		this.parent.insertAdjacentHTML("beforeend", this.getHtml(toastId));

		const toastElement = document.getElementById(toastId);
		if (!toastElement) {
			return;
		}

		toastElement.addEventListener("hidden.bs.toast", () => {
			toastElement.remove();
		}, { once: true });

		const bootstrapApi = window.bootstrap;
		if (!bootstrapApi?.Toast) {
			toastElement.classList.add("show");
			setTimeout(() => toastElement.remove(), this.delay);
			return;
		}

		const toast = bootstrapApi.Toast.getOrCreateInstance(toastElement, {
			autohide: true,
			delay: this.delay,
		});

		toast.show();
	}
}
