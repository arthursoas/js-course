this.a = 1 // Funciona
exports.b = 2 // Funciona
module.exports.c = 3 // Funciona

exports = null
console.log(module.exports)

exports = { // atribuição direta em formato de objeto não funciona
    nome:  'Teste' // Será ignorado
}

console.log(module.exports)

module.exports = {public: true}