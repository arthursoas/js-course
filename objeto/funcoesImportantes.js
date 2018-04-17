const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Retorna um vetor com os atributos do objeto

console.log(Object.values(pessoa)) // Retorna um vertor com os valores dos atributos do objeto

console.log(Object.entries(pessoa)) // Retorna um array com subarrays com atributo e valor

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Permite que o atributo apareça na lista de chaves (Object.keys)
    writable: false, // Não permite alterar o valor
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // Pega os atributos de o1 e o2 e coloca dentro de obj e dest
// se houver um atributo repetido, o último valor sobrescreve os demais

Object.freeze(obj)
obj.c = 1234
console.log(obj)
console.log(dest)

//console.log(Object) // Retorna
