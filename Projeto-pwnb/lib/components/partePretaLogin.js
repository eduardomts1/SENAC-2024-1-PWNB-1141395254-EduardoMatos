export class PartePretaLogin extends HTMLElement {
    constructor() {
        super();
        const component = this.attachShadow({ mode: "open" });
        component.appendChild(this.build());
        component.appendChild(this.style())
    }

    build() {
        const component = document.createElement("div");
        component.innerHTML = `
            <img src="/Projeto-pwnb/assets/logo.png" />
            <h1> Ferramenta para análise de dados de negócio </h1>
        `
        component.classList.add("container");
        component.classList.add("preto");

        return component;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            
                height: 100vh;
                width: 50vw;
            }
            
            .preto {
                background-color: #363636;
            }

            h1 {
                color: #f2f2f2;
                text-align: center;
                width: 12em;
            }
        `;

        return style;
    }
}