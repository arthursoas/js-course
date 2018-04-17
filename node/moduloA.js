// Maneiras de explortar algo dinamicamente
// Objeto export está sendo preenchido dinamicamente

console.log(module.exports)

this.ola = 'Fala Pessoal'
exports.bemVindo = 'Bem vindo ao Node!'
module.exports.ateLogo = 'Até o próximo exemplo'

console.log(module.exports)