const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(elemento){ // Cria um novo array com os valores transformados
    return elemento * 2 // Tranformação de cada elemento
})

console.log(resultado, nums)

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)