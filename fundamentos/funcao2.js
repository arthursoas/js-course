// Armazenando uma funcao em uma variaável
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(5, 4))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(4, 2))

const imprimir2 = a => console.log(a)
imprimir2('legal!!!')