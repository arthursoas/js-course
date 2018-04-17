// Maneira tradicional de exportação
// Objeto export está sendo sobrescrito
console.log(module.exports)

module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa Noite'
    }
}

console.log(module.exports)