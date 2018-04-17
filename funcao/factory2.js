function criarProduto(nome, preco){
    return{
        nome, // Não precisa colocar atributo : valor pois o parâmetro tem o mesmo nome do atributo
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Celular', 899.90))
console.log(criarProduto('Tablet', 1299.90))
