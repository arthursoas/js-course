const pai = {
    nome: 'Pedro',
    codCabelo: 'Preto'
}

const filha1 = Object.create(pai) // Cria o bojeto filha comolocando como protótipo o objeto pai
filha1.nome = 'Ana'

console.log(filha1.codCabelo)

const filha2 = Object.create(pai, { // Cria objeto com herança e já adiciona atributos
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.codCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? // Atributos apenas do objeto (não considera atributos herdados)
        console.log(key) : console.log(`Por herença ${key}`)
}