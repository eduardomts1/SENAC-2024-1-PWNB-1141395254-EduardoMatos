export class LayoutLogin extends HTMLElement {
    constructor() {
        super()
        const component = this.attachShadow({ mode: "open" });
        component.appendChild(this.build());
        component.appendChild(this.style());
    }

    build() {
        const component = document.createElement("div");
        component.innerHTML = `
        <img src="/Projeto-pwnb/assets/logo.png" />
        <h1> teste <h1/>
        `
        return component
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
        div {
            display: flex;
            flex-direction: column;
        }

        img {
            heigth: 17em;
            width: 17em;
        }
        `
        return style
    }
}