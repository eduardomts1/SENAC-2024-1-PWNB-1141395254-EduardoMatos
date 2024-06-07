export class Menu extends HTMLElement {
    constructor() {
        super();
        const component = this.attachShadow({mode: 'open'});
        component.appendChild(this.build());
        component.appendChild(this.style());
    }

    build() {
        let path;

        const menu = document.createElement('nav');
        menu.innerHTML = `
            <menu>
                <li>
                    <a class="importacao-dados" href="/Projeto-pwnb/pages/importacaoDados">Importação de dados</a>
                </li>
                <li>
                    <a class="analise-descritiva" href="/Projeto-pwnb/pages/analiseDescritiva">Análise Descritiva</a>
                </li>
                <li>
                    <a class="analise-exploratoria-dados" href="/Projeto-pwnb/pages/analiseExploratoriaDados">Análise exploratória de dados (AED)</a>
                </li>
            </menu>
        `

        const importacaoDados = menu.getElementsByTagName("li")[0];
        path = menu.getElementsByTagName("a")[0].getAttribute("href");
        this.navig(importacaoDados, path);
        
        const analiseDescritiva = menu.getElementsByTagName("li")[1];
        path = menu.getElementsByTagName("a")[1].getAttribute("href");
        this.navig(analiseDescritiva, path);

        const analiseExploratoriaDados = menu.getElementsByTagName("li")[2];
        path = menu.getElementsByTagName("a")[2].getAttribute("href");
        this.navig(analiseExploratoriaDados, path);

        return menu;
    }

    style() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                font-family: sans-serif;
                font-weight: 500;
                color: #f2f2f2;
            }

            nav {
                height: 100%;
                width: 20em;

                background-color: #323232;
            }

            menu {
                margin: 0px;
                padding: 0em;
            }

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                list-style-type: none;

                height: 5em;
                width: 100%;

                cursor: pointer;
            }

            li:hover {
                background-color: #4169E1;
            }
        
            li:hover > a {
                font-weight: 700;
            }

            a {
                text-decoration: none;
            }
        `
        return style;
    }

    navig(element, path) {
        element.addEventListener('click', () => {
            window.location.href = path;
        })
    }
}