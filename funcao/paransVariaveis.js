function soma(){
    let soma = 0
    for(let i in arguments){ // Para cada argumento (parâmetro recebido) faça...
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 3))
console.log(soma(4, 6.7, 2.1, 95))
console.log(soma(1.6, 3.7, 'Arthur'))
console.log(soma('a', 'b', 'c'))