export class Table extends HTMLElement {
    constructor() {
        super();
        const component = this.attachShadow({ mode: "open" });
        component.appendChild(this.build())
        component.appendChild(this.style())
    }

    build() {
        let table = document.createElement("table");
        table.innerHTML = `
            <tr>
                <th> Dt. Venda </th>
                <th> Cliente </th>
                <th> Produto </th>
                <th> Qtd. Venda </th>
                <th> Valor total </th>
                <th> Empresa </th>
            </tr>
        `

        table.innerHTML += this.criarLinhas();

        return table;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            table {
                font-family: sans-serif;
                border-collapse: collapse;
                width: 100%;
            }
            
            th {
                background-color: #4169E1;
                font-weight: bold;
                color: #f2f2f2;
            }

            td, th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }

            tr {
                background-color: white;
            }
            
            tr:nth-child(even) {
                background-color: #c7d5ff;
            }
        `

        return style;
    }

    criarLinhas() {
        let linha = '';

        let vendas = JSON.parse(localStorage.getItem("vendas"));
        if (vendas == null) {
            vendas = [];
        }

        vendas.forEach(venda => {
            linha += `
                <tr>
                    <td> ${venda.dataVenda} </td>
                    <td> ${venda.cliente} </td>
                    <td> ${venda.produto} </td>
                    <td> ${venda.qtdVenda} </td>
                    <td> ${venda.valorTotal} </td>
                    <td> ${venda.empresa} </td>
                </tr>   
            `;     
        });

        return linha;
    }
}