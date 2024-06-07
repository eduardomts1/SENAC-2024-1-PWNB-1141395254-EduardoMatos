const agruparDados = () => {
    const vendas = JSON.parse(localStorage.getItem("vendas"));

    const agrupamento = {};
    vendas.forEach((venda) => {
        const {produto, qtdVenda, valorTotal} = venda;

        if (!agrupamento[produto]) {
            agrupamento[produto] = {
                quantidadeVendida: 0,
                valorTotalVendido: 0
            }
        }

        agrupamento[produto].quantidadeVendida += parseInt(qtdVenda);
        agrupamento[produto].valorTotalVendido += parseInt(valorTotal);
    })

    return agrupamento;
}

const carregarDados = (legenda) => {
    const vendasAgrupadas = agruparDados();
    
    let dados = [];
    if (legenda == "valor") {
        // retorna um array dos próprios pares [key, value] e cria um novo array com eles
        dados = Object.entries(vendasAgrupadas).map(([produto, valores]) => {
            return [produto, valores.valorTotalVendido];
        });   
    } else {
        // retorna um array dos próprios pares [key, value] e cria um novo array com eles
        dados = Object.entries(vendasAgrupadas).map(([produto, valores]) => {
            return [produto, valores.quantidadeVendida];
        });   
    }

    // adiciona legenda ao array
    dados.unshift(['Legenda', legenda]);

    return dados;
}