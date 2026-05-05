export class Button {
    constructor(parent, text, onClick = () => {}, type = 'primary') {
        this.parent = parent;
        this.text = text;
        this.type = type;
        this.onClick = onClick;
    }

    render() {
        const button = document.createElement('button');
        button.type = 'button';
     
        button.className = `btn btn-${this.type}`;
        button.textContent = this.text;
        button.addEventListener('click', this.onClick);
        
        this.parent.appendChild(button);
    }
}