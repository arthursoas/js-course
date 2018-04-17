console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Ordena o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // A partir do índice 1, exclua 2 elementos
console.log(aprovados)

aprovados = ['bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'elemento1') // A partir do índice 1, exclua 2 elementos e adicione os novos elementos 
console.log(aprovados)

aprovados = ['bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'elemento1') // A partir do índice 1, exclua 0 elementos e adicione os novos elementos 
console.log(aprovados)