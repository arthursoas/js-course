// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Neste caso o segundo valor vai ser undefined
imprimirSoma(2, 3, 4, 5) // Ignora os valores a mais
imprimirSoma()

// função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(4, 5))
console.log(soma(2)) // Realizou a soma pois 'b' já está definido como 0 na chamada da função
console.log(soma())