const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento

console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona elemento no início do arrau
console.log(pilotos)

// Splice
// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Cria um novo aray a partir do índice 2 do array 'Pilotos'
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Cria um novo aray a partir do índice 1 até o índice 3 do array 'Pilotos'
console.log(algunsPilotos2)