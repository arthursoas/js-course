function rand({ min = 0, max = 1000}) { // Lê parâmetros 'min' e 'max' de um objeto, e define valores default
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40, med: 30}
console.log(rand(obj)) // Envia um objeto

console.log(rand({min: 955})) // Envia um objeto e ua o 'max' default
console.log(rand({})) // Envia um objeto vazio e usa 'min' e 'max' default

//console.log(rand()) // Dá erro pois tenta desestruturar um null
