// Tagged templates - processa o template dentro de uma funcao
function tag(partes, ...valores){ 
    // partes: parte da string que NÃO é composto por uma var, let ou const
    // ...valores: parte da string que é composto por uma var, let ou const 
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)