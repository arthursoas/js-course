let comparaComThis = function(param){
    console.log(this === param)
}

console.log('Fora da função:',this === global)

comparaComThis(global) // True

const obj = {}
comparaComThis = comparaComThis.bind(obj) // alterando o contexto da função para obj
comparaComThis(global) // False - O contexto foi mudado
comparaComThis(obj) // True - Novo contexto

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // module.exports é o this do atual runtime. Mesma coisa que comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj) // A arrow function não permite alterar o contexto para obj
comparaComThisArrow(obj) // False
comparaComThisArrow(module.exports) // True

console.log(module.exports)