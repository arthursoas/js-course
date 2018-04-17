// pessoa -> 123
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro' // O endereço da constante não mudou, então a alteração é possível
console.log(pessoa)

//pessoa = {nome: 'Ana'} 
// Está apontando para outro objeto em outro endereço de memória, porém a constante não permite fazer essa alteração

Object.freeze(pessoa) // Congela o objeto e não permite mais alterações

pessoa.nome = 'Maria' // Será ignorado
console.log(pessoa)

pessoa.end = 'Rua ABC' // Será ignorado
delete pessoa.nome // Será ignorado

console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Cleiton'}) // Cria um objeto já congelado
console.log(pessoaConstante)