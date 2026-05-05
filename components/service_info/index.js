export class ServiceInfo {
    getListHtml(items) {
        return items.map(item => `<li>${item}</li>`).join("");
    }

    getHtml(infoTitle, infoItems) {
        return (
            `
                <div class="row g-3">
                    <div class="col-12">
                        <div class="card p-4 border-0 shadow-sm h-100">
                            <h2 class="fs-5 fw-semibold mb-3">${infoTitle}</h2>
                            <ul class="mb-0 text-secondary d-flex flex-column gap-2">
                                ${this.getListHtml(infoItems)}
                            </ul>
                        </div>
                    </div>
                </div>
            `
        );
    }
}
