export class Footer extends HTMLElement {
    constructor() {
        super();
        const component = this.attachShadow({mode: 'open'});
        component.appendChild(this.build());
        component.appendChild(this.style());
    }

    build() {
        const footer = document.createElement('footer');
        footer.innerHTML = `
            <p>
                Ferramenta para análise de dados - PW 2024 - Todos os direitos reservados
            </p>
        `
        return footer;
    }

    style() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                font-family: sans-serif;
                font-weight: 500;
                color: #f2f2f2;
            }

            footer {
                display: flex;
                align-items: center;
                justify-content: center;

                height: 3em;

                background-color: #363636;
            }

            @media(max-width: 1366px) {
                footer {
                    height: 3.4em;
                }
            }
        ` 

        return style;
    }
}