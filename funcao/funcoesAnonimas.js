const soma = function(x, y){
    return x + y
}

const imprimirResultados = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultados(3, 4) // Valou default
imprimirResultados(3, 4, function (x, y) { // Enviando a função inline
    return x - y
})
imprimirResultados(3, 4, (x, y) => x * y) // Função arrow inline

const pessoa = {
    falar: function() { // função como atributo
        console.log('Opa')
    },
    falar2() { // outro mode de usar a função como atributo
        console.log('Opa')
    }
}

pessoa.falar()
pessoa.falar2()