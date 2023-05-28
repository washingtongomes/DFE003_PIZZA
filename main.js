


function CalcularValorPorCliente(){
    const valorTotalConta = (document.getElementById('valorConta')).value;
    const valorTaxa = (document.getElementById('taxaServico')).value;
    const qtdeClientes = (document.getElementById('qtdeClientes')).value;

    const calculoTaxa = parseFloat(valorTotalConta * valorTaxa) / 100; 
    const valorPorCliente = ((valorTotalConta / qtdeClientes) + (calculoTaxa / qtdeClientes ));

    document.getElementById("content").innerText = `Valor Total da compra: R$...${valorTotalConta} \n\n
 Valor da TAXA (${valorTaxa}) % : R$... ${calculoTaxa.toFixed(2)} \n
 Quantidades de Clientes:  ${qtdeClientes} \n\n\n
 Valor da conta por Cliente: R$... ${valorPorCliente.toFixed(2)}`;

}