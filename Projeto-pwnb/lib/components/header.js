export class Header extends HTMLElement {
    constructor() {
        super();
        const component = this.attachShadow({mode: 'open'});
        component.appendChild(this.build());
        component.appendChild(this.styles());
    }

    build() {
        const header = document.createElement('header');
        header.innerHTML = `
            <div class="header__imagem">
                <img src="/Projeto-pwnb/assets/logo.png" />
            </div>
            <div class="header__texto-button">
                <p>
                    Seja bem vindo(a), <b class="user"></b>
                </p>
                <button class="button-sair">Sair</button>
            </div>
        `

        // Pega elemento <b> e adiciona conteúdo nele baseado no atributo user
        const user = header.getElementsByClassName("user").item(0);
        user.textContent = this.getAttribute('user');

        // adiciona um listenner para o evento de click do botão
        const button = header.getElementsByClassName("button-sair");
        this.logout(button.item(0));

        return header;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                font-family: sans-serif;
                color: #f2f2f2;
            }

            header {
                display: flex;
                flex-direction: row;

                background-color: #363636;
            }

            .header__imagem {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 29em;
            }

            img {
                width: 2em;
                margin: .5em 0em .5em 0em;
            }

            .header__texto-button {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            }

            button {
                background-color: #4169E1;
                font-weight: bold;
                
                width: 5.5em;                    
                height: 2.5em;
                
                border: none;
                border-radius: 0.5em;

                margin-right: 1em;
            }

            button:hover {
                background-color: #537eff;
                cursor: pointer;
            }
        `
        return style;
    }

    logout(button){
        button.addEventListener('click', () => {
            window.location.href = "/Projeto-pwnb/pages/login/index.html";
        })
    }
}