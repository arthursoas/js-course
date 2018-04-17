const a = {name: 'Teste'} // 'a' Aponta para um edereço da memória (Atribuição por referência)

console.log(a)

const b = a // 'b' passa a apontar para o mesmo endereço de memória
b.name = 'Opa' // Todas as alterações em 'b' pasam a afetar também 'a'

console.log(a)

let c = 3
let d = c // Valores primitivos da linguagem (int, float, etc..) a cópia e do valor, e não da posição em memória
d++
console.log(c)
console.log(d)

let valor // Não inicializada
console.log(valor)

valor = null // Não possui valor e não aponta para nenhum endereço de memória
console.log(valor)
//console.log(valor.toString()) // Não é possível ler propriedades de nulo

//================================================================================================//

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)