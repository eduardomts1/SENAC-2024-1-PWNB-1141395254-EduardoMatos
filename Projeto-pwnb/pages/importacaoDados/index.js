function importar() {
    if (!validarInputObrigatorio()) {
        alert("Preencha todos os campos");
        return;
    } 

    inserirLocalStorage();
    limpar();
    alert("inserido com sucesso");
}

function validarInputObrigatorio() {
    const component = window.document.getElementsByTagName("wc-input");
    let validacao = true;

    for (let i = 0; i < component.length; i++) {
        const element = component[i].shadowRoot;

        let input = element.querySelector(".input");
        let img = element.querySelector("#error");

        if (input.value == "") {
            validacao = false;
            img.style.visibility = "visible";
        } else {
            img.style.visibility = "hidden";
        }   
    }
    
    return validacao;
}

function limpar() {
    const component = window.document.getElementsByTagName("wc-input");

    for (let i = 0; i < component.length; i++) {
        const element = component[i].shadowRoot;

        let input = element.querySelector(".input");
        let img = element.querySelector("#error");

        input.value = "";
        img.style.visibility = "hidden";   
    }
}

function inserirLocalStorage() {
    let item = {cliente: "",produto: "",empresa: "",qtdVenda: 0,valorTotal: 0,dataVenda: ""};
    let vendas = localStorage.getItem("vendas");
    if (vendas !== null) {
        vendas = JSON.parse(vendas); 
    } else {
        vendas = [];
    } 

    const component = window.document.getElementsByTagName("wc-input");

    for (let i = 0; i < component.length; i++) {
        const element = component[i].shadowRoot;
        let input = element.querySelector(".input");

        item = {
            cliente: input.name === "cliente" ? input.value : item.cliente,
            // para que os produtos sejam agrupados corretamente, usamos a função toLoweCase
            produto: input.name === "produto" ? input.value.toLowerCase() : item.produto.toLowerCase(),
            empresa: input.name === "empresa" ? input.value : item.empresa,
            qtdVenda: input.name === "qtdVenda" ? input.value : item.qtdVenda,
            valorTotal: input.name === "valorTotal" ? parseInt(input.value) * parseInt(item.qtdVenda) : item.valorTotal,
            dataVenda: input.name === "dataVenda" ? input.value : item.dataVenda
        }
    }

    vendas = [...vendas, item];
    localStorage.setItem("vendas", JSON.stringify(vendas));
}