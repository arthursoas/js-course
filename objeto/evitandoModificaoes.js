// Object.preventExtension
// Impede de adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promocao'
})

console.log('Extensível:', Object.isExtensible(produto)) // Testa se o produto é extensível (aceita novos atributos)

produto.nome = 'Borrecha'
produto.descricao = 'Borracha escolar branca' // Será ignorado
delete produto.tag
console.log(produto)

// Objsect.seal
// Impewde de criar novos atrbutos ou deletá-los, mas pode mudar o valor dos atributos
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // Será ignorado
delete pessoa.nome // será ignorado
pessoa.idade = 29
console.log(pessoa)

// Object.freeze
// Impede de alterar qualquer coisa no objeto