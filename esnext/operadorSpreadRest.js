// Spread (espalhar) / Rest (juntar)

// Usar spread com objetos
const funcionario = { nome: 'Maria', salario: 1234.56}
const clone = {  ativo: true, ...funcionario} // ...funcionario pega todos os atributos do obj funcionário

console.log('clone:', clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]

console.log('Grupo final:', grupoFinal)