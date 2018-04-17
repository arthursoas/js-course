// Par nome/valor

const saudacao = 'Opa' // Contexto lexitco 1

function exec() {
    const saudacao = 'Fallaaaa' // Contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua da hora',
        numero: 123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)