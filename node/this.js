// This fora de uma funcao aponta para o module.exports
console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)
this.a = 123

function logThis(){
    // This dentro de uma função aponta para o global
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)    
    this.a = 456
}

logThis()

console.log('Global:', global.a)
console.log('Módulo:', exports.a)