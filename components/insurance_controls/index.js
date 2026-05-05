export class InsuranceControls {
    constructor(prefix = "insurance") {
        this.prefix = prefix;
    }

    get modelInputId() {
        return `${this.prefix}_model`;
    }

    get yearInputId() {
        return `${this.prefix}_year`;
    }

    get priceInputId() {
        return `${this.prefix}_price`;
    }

    get planName() {
        return `${this.prefix}_plan`;
    }

    get calculateButtonId() {
        return `${this.prefix}_calculate`;
    }

    getFieldsHtml() {
        return (
            `
                <div class="row g-3">
                    <div class="col-12 col-md-4">
                        <label class="form-label">Марка и модель</label>
                        <input id="${this.modelInputId}" type="text" class="form-control" placeholder="Например, Kia Rio">
                    </div>
                    <div class="col-12 col-md-4">
                        <label class="form-label">Год выпуска</label>
                        <input id="${this.yearInputId}" type="number" class="form-control" min="1950" placeholder="Например, 2022">
                    </div>
                    <div class="col-12 col-md-4">
                        <label class="form-label">Рыночная стоимость, ₽</label>
                        <input id="${this.priceInputId}" type="number" class="form-control" min="1" placeholder="Например, 1 250 000">
                    </div>
                </div>

                <div class="row g-3 mt-1">
                    <div class="col-12 col-lg-6">
                        <label class="form-label d-block">Тип полиса</label>
                        <div class="d-flex flex-column gap-2 text-secondary">
                            <label class="form-check-label"><input class="form-check-input me-2" type="radio" name="${this.planName}" value="osago" checked>ОСАГО</label>
                            <label class="form-check-label"><input class="form-check-input me-2" type="radio" name="${this.planName}" value="kasko">КАСКО</label>
                            <label class="form-check-label"><input class="form-check-input me-2" type="radio" name="${this.planName}" value="combo">ОСАГО + КАСКО</label>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <label class="form-label d-block">Дополнительные опции</label>
                        <div class="d-flex flex-column gap-2 text-secondary">
                            <label class="form-check-label"><input class="form-check-input me-2" type="checkbox" id="${this.prefix}_option_replacement">Подменный автомобиль</label>
                            <label class="form-check-label"><input class="form-check-input me-2" type="checkbox" id="${this.prefix}_option_assistance">Помощь на дороге 24/7</label>
                            <label class="form-check-label"><input class="form-check-input me-2" type="checkbox" id="${this.prefix}_option_passengers">Страхование водителя и пассажиров</label>
                        </div>
                    </div>
                </div>
            `
        );
    }

    getValues() {
        const selectedPlan = document.querySelector(`input[name="${this.planName}"]:checked`);

        return {
            model: document.getElementById(this.modelInputId)?.value?.trim() ?? "",
            year: Number(document.getElementById(this.yearInputId)?.value),
            price: Number(document.getElementById(this.priceInputId)?.value),
            plan: selectedPlan?.value ?? "osago",
            options: {
                replacementCar: Boolean(document.getElementById(`${this.prefix}_option_replacement`)?.checked),
                roadAssistance: Boolean(document.getElementById(`${this.prefix}_option_assistance`)?.checked),
                passengers: Boolean(document.getElementById(`${this.prefix}_option_passengers`)?.checked),
            },
        };
    }
}
