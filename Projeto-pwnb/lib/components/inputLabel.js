export class InputLabel extends HTMLElement {
    constructor() {
        super();
        const component = this.attachShadow({ mode: "open" });
        component.appendChild(this.build());
        component.appendChild(this.style());
    }

    build() {
        const component = document.createElement("div");
        component.innerHTML = `
            <label for=""> ${this.getAttribute("label")} </label>
            <input class="${this.getAttribute("label")}" type="${this.getAttribute("type")}" placeholder="${this.getAttribute("placeholder")}">
        `
        component.classList.add("container-input");

        return component; 
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            label {
                color: #404040;
            }
            
            .container-input {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-bottom: 1em;
            }
            
            label {
                font-weight: bold;
                font-size: 1.2em;
            }
            
            input {
                font-weight: bold;
                font-size: .9em;
                color: #646464;
            
                height: 2em;
                padding: .5em;
                border: solid #646464 1.5px;
            }
            
            input::placeholder {
                color: #9b9b9b;
            }
        `

        return style;
    }
}