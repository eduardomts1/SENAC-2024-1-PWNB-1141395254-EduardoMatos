export class LabelInput extends HTMLElement {
    constructor() {
        super();
        const component = this.attachShadow({ mode: "open" });
        component.appendChild(this.build());
        component.appendChild(this.style());
    }

    build() {
        const component = document.createElement("div");
        component.innerHTML = `
            <label class="label"></label>
            <div class="container-input">
                <input class="input" required="required" autocomplete="off"></input>
                <img id="error" class="error" src="/Projeto-pwnb/assets/erro.png"/>
            </div>
        `;

        const attCampo = this.getAttribute("campo");
        const attType = this.getAttribute("type");
        const attName = this.getAttribute("name");

        const label = component.getElementsByTagName("label").item(0);
        label.textContent = `${attCampo}:`;

        const input = component.getElementsByTagName("input").item(0);
        input.setAttribute("type", attType);
        input.setAttribute("name", attName);
        input.setAttribute("placeholder", attCampo);

        if (attType == "number") {
            this.listenerInputNumber(input);   
        }

        return component;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            div {
                display: flex;
                flex-direction: row;
                
                width: 35em;
                margin-bottom: .5em;
            }

            label {
                width: 15em;
            }

            input {
                width: 20em;
                height: 1.7em;
                padding: .3em;
            }

            img {
                visibility: hidden;
                margin-left: 1em;
            }
        `;

        return style;
    }

    listenerInputNumber(input) {
        input.addEventListener("focusout", function() {
        let value = parseInt(this.value);
            if (value < 1) {
                alert("O valor mínimo é 1");
                this.value = 1;
            }
            
            if (value > 100000) {
                alert("O valor máximo é 100000");
                this.value = 100000;
            } 
        });
    }
}