const modA = require('../../moduloA') // Respeitar o case sensitive
const modA2 = require('/Users/arthur.soares/Documents/Codigos/curso_js/node/moduloA.js') // Não usar

console.log(modA.ola)

const saudacao = require('saudacao') // Procura o arquivo index.js na pasta node_modules/saudacao
console.log(saudacao.ola)

const c = require('./pastaC') // Acessa o arquivo index.js dentro da pastaC
console.log(c.ola2)

const http = require('http') // Cria um serivodr web na porta 8080 (localhost:8080)
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)