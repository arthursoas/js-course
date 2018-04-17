// Declara uma constante 'a' que é item de um array
const [a] = [10]
console.log(a)

// Declara várias constantes que são itens de um array
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// Cria um array de arrays
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)