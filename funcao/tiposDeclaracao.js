console.log(soma(3, 4))

// function declaration
// É carregada quando o interpretador lê o arquivo, pode ser chamada antes ou depois de ser declarada.
function soma(x, y){
    return x + y
}

// function expression
// Só pode ser chamada depois de ser declarada
const sub = function(x, y){
    return x - y
}

console.log(sub(3, 4))

// named function expression
// Pode ajudar no momento de debugar o código
// Só pode ser chamada depois de ser declarada
const mult = function mult(x, y){
    return x * y
}

console.log(mult(3, 4))
