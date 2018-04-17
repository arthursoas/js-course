const notas = [6.7, 9.4, 3.5, 5.2, 1.1]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}