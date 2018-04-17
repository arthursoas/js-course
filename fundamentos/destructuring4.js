function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min] // Inverte duas variaveis usando desestruturação
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // Envia um array com duas posições
console.log(rand([992])) // Envia um array com apenas a primeira posição
console.log(rand([, 10])) // Envia um array com apensas a segunda posição
console.log(rand([])) // Envia um array vazio

//console.log(rand()) // Dá erro pois tenta desestruturar um null
