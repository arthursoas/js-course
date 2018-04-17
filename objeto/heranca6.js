function aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('Bem vindo', 123)
const aula2 = new aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params){
    const obj = {} // Criou um objeto novo
    obj.__proto__ = f.prototype // Atribui o protótipo do objeto ao atributo prototype da funcao passada como parâmetro (para ele ter tipo aula)
    f.apply(obj, params) // Executa a função como objeto de contexto o 'obj' (para ele recber o retorno) e os parâmetros
    return obj
}

const aula3 = novo(aula, 'Bem vindo', 123)
const aula4 = novo(aula, 'Até Breve', 456)
console.log(aula3, aula4)
