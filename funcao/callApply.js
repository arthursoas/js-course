function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4900,
    desc: 0.15,
    getPreco
}

// Definindo variáveis diretamente no contxto global
global.preco = 20
global.desc = 0.1
console.log(getPreco())

// chamando a função através de um atributo de um objeto
console.log(produto.getPreco())

const carro = {preco: 15000, desc: 0.20}
console.log(getPreco.call(carro)) // chama a função passsando como contexto (this) o objeto carro
console.log(getPreco.apply(carro)) // chama a função passsando como contexto (this) o objeto carro

console.log(getPreco.call(carro, 0.17, '$')) // Passou, além do contexto, os parâmetos da função getPreco
console.log(getPreco.apply(carro, [0.17, '$'])) // Passou, além do contexto, os parâmetros da função getPreco através de um array