// Closure é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto lexico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x // retornará 'Local' pois a função 'dentro' está enclausurada dentro da função 'fora', onde uma const 'x' mais interna foi delcarada
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())