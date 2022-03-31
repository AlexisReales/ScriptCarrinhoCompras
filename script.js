let produtos = document.querySelector('#produtos')
let botao = document.querySelector('#comprar')

botao.addEventListener('click', comprar)
function comprar(){
   let compra = "Produtos comprados\n"
    if (produtos.value == "Hamburguer Simples"){
        compra += "Produto: " + produtos.value + ", valor: R$20,00"
} else if (produtos.value == "Hamburguer Duplo"){
    compra += "Produto: " + produtos.value + ", valor: R$25,00"
} else if (produtos.value == "Hamburguer Duplo com Bacon"){
    compra += "Produto: " + produtos.value + ", valor: R$27,00"
} else if (produtos.value == "Hamburguer Triplo com Bacon"){
    compra += "Produto: " + produtos.value + ", valor: R$35,00"
    } else{
        compra += "Produto não Selecionado"
    }
    alert(compra)
}