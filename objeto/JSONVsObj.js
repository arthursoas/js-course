const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) // Remove funções, pois carrega apenas dados

//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) // Formato inválido
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) // Formato inválido
console.log(JSON.parse('{"a": 1, "b": 2, "c" : 3}'))

console.log(JSON.parse('{"a": 1.7, "b": "String", "c": true, "d": {}, "e": [] }'))