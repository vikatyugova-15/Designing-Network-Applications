import { Button } from "../button/index.js";

function mergeAndSort(...arrays) {
    return [].concat(...arrays)
        .sort((a, b) => b - a)
        .join(" ");
}

function isPalindrome(str) {
    const cleaned = String(str).toLowerCase().replace(/[^а-яa-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

function isPalindrome2(str) {
    const cleaned = String(str).toLowerCase().replace(/[^а-яa-z0-9]/g, "");
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    return true;
}

export class ServiceCard {
    constructor(parent) {
        this.parent = parent;
    }

    getTasksHtml(service) {
        const mergeResult = mergeAndSort([12, 4, 9], [7, 21], [3, 15, 8]);
        const palindromeText = "А роза упала на лапу Азора";
        const notPalindromeText = String(service.secondTaskText ?? "Банк и кредит");
        const toAnswer = (value) => value ? "Да" : "Нет";

        return (
            `
                <div class="border-top pt-3 mt-3 d-flex flex-column gap-3">
                    <div>
                        <h4 class="text-primary fs-6 fw-semibold mb-2">Задача 1: mergeAndSort</h4>
                        <p class="text-secondary mb-2">Исходные массивы: [12, 4, 9], [7, 21], [3, 15, 8]</p>
                        <p class="mb-0">Результат: <span class="fw-semibold">${mergeResult}</span></p>
                    </div>

                    <div>
                        <h4 class="text-primary fs-6 fw-semibold mb-2">Задача 2: Проверка палиндрома</h4>
                        <p class="text-secondary mb-2">Текст: "${palindromeText}"</p>
                        <p class="mb-2">isPalindrome: <span class="fw-semibold">${toAnswer(isPalindrome(palindromeText))}</span></p>
                        <p class="mb-3">isPalindrome2: <span class="fw-semibold">${toAnswer(isPalindrome2(palindromeText))}</span></p>

                        <p class="text-secondary mb-2">Текст: "${notPalindromeText}"</p>
                        <p class="mb-2">isPalindrome: <span class="fw-semibold">${toAnswer(isPalindrome(notPalindromeText))}</span></p>
                        <p class="mb-0">isPalindrome2: <span class="fw-semibold">${toAnswer(isPalindrome2(notPalindromeText))}</span></p>
                    </div>
                </div>
            `
        );
    }

    getHtml(service) {
        return (
            `
                <div class="d-flex" id="card-${service.id}">
                    <div class="card p-3">
                        <div class="rounded-3 overflow-hidden">
                            <img src="${service.image}" alt="${service.title}" class="aspect-1 w-100 h-100 object-fit-cover">
                        </div>
                    
                        <h3 class="text-primary fs-4 fw-medium pt-3">${service.title}</h3>
                    
                        <p class="text-secondary flex-grow-1">${service.description}</p>

                                            ${this.getTasksHtml(service)}
                        
                        <div id="card-${service.id}-controls" class="d-flex gap-2 justify-content-end"></div>
                    </div>
                </div>
            `
        );
    }

    controlsContainer(service) {
        return document.getElementById(`card-${service.id}-controls`);
    }

    render(service, onClick = () => {}, onDelete = () => {}) {
        const html = this.getHtml(service);
        this.parent.insertAdjacentHTML('beforeend', html);

        const controlsContainer = this.controlsContainer(service);

        const deleteButton = new Button(controlsContainer, 'Удалить', () => onDelete(service), 'danger');
        deleteButton.render();
        
        const aboutButton = new Button(controlsContainer, 'Подробнее', () => onClick(service));
        aboutButton.render();
    }
}