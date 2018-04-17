const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua ABC',
        numero: 1000,
    }
}

const {nome, idade} = pessoa // Pega os elementos nome e idade do objeto pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // Pega os elementos nome e idade do objeto pessoa e renomeia-os como 'n' e 'i'
console.log(n, i)

const {sobrenome, bemhumorada = true} = pessoa // Pega ele elementos não declarados e define um valor padrão para 'bemHumorada'
console.log(sobrenome, bemhumorada)

const { endereco: {logradouro, numero, cep}} = pessoa // Pega elementos de um objeto dentro do objeto pessoa
console.log(logradouro, numero, cep)

//const { conta: { ag, num}} = pessoa
//console.log(ag, num)