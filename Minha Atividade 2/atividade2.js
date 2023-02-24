const listaDeProdutoNoCarrinho =  [10, 2, 1, 30, 5]

//OBJETO LEMBRAR DO ENDEREÇO: RUA, ENDEREÇO E ETC...
const produto = {
    nomeProduto: "Passa Porte",
    precoProduto: 5000,
    descontoProduto: 30,
    descontoValida: true,
    precoFinalComDesconto: 0,    
}

const cliente = {
    valorTotalAPagar: [],
    somaTotalAPagar: 0
}

console.log(produto)

if(produto.descontoValida){
    calcularValorComDesconto = ((produto.precoProduto * produto.descontoProduto) / 100 )
    produto.precoFinalComDesconto = produto.precoProduto - calcularValorComDesconto
} else {
    produto.precoFinalComDesconto = produto.precoProduto
}
if (produto.precoFinalComDesconto > 1000) {
    produto.precoFinalComDesconto = produto.precoFinalComDesconto - 50
} else {
    console.log('Preço final: ', produto.precoFinalComDesconto)
}

//aproveitei o for para somar o total a pagar dos clientes
for (let index = 0; index < listaDeProdutoNoCarrinho.length; index++) {
    
    const calculo = listaDeProdutoNoCarrinho[index] * produto.precoFinalComDesconto;
    cliente.valorTotalAPagar.push(calculo)
    cliente.somaTotalAPagar = cliente.somaTotalAPagar + calculo
    console.log("O cliente",index +1, " deverá pagar: R$", calculo)
    
}

console.log("O total de lucro é de R$", cliente.somaTotalAPagar)
