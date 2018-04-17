require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // Será ignorado pois objeto foi congelado em global.js
console.log(MinhaApp.nome)