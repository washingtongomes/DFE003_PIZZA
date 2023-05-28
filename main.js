


function CalcularValorPorCliente(){
    //Pegando valores dos campos
    const valorTotalConta = (document.getElementById('valorConta')).value;
    const valorTaxa = (document.getElementById('taxaServico')).value;
    const qtdeClientes = (document.getElementById('qtdeClientes')).value;
    
    //calculando
    const calculoTaxa = parseFloat(valorTotalConta * valorTaxa) / 100; 
    const valorPorCliente = ((valorTotalConta / qtdeClientes) + (calculoTaxa / qtdeClientes ));

    //escrevendo no HTML
    document.getElementById("content").innerText = `Valor Total da compra: R$...${valorTotalConta} \n\n
 Valor da TAXA (${valorTaxa}) % : R$... ${calculoTaxa.toFixed(2)} \n
 Quantidades de Clientes:  ${qtdeClientes} \n\n\n
 Valor da conta por Cliente: R$... ${valorPorCliente.toFixed(2)}`;


}

    //função submit
    function EventForm(){
        const form = document.getElementById("form");
        form.addEventListener("submit", (e) =>{
            e.preventDefault();
            console.log("Form enviado com sucesso !")


            CalcularValorPorCliente();
        })
    
    }