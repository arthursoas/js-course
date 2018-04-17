const alunos = [
    {nome: 'joao', nota: 7.3, bosista: false},
    {nome: 'Maria', nota: 9.2, bosista: true}, 
    {nome: 'Pedro', nota: 9.8, bosista: false},
    {nome: 'Ana', nota: 8.7, bosista: true},    
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // 0 = valor inicial para interação. Se nenhum valor for passado o reduce usa o primeiro item do vetor

console.log(resultado)