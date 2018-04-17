const escola = "cod3r"

console.log(escola.charAt(4)) // Retorna caractere na posição 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Retorna código do caractere na posição 3
console.log(escola.indexOf('o')) // Retorna posição do caractere 'o' dentro da string

console.log(escola.substring(1)) // Retorna apenas um parte da string (posição 1 para frente)
console.log(escola.substring(0, 3)) // Retorna apenas um parte da string (posição 0 para frente até antes do 3)

// Concatenações
console.log('Escola '.concat(escola).concat("!")) 
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e')) // Substitui todos os digitos por 'e'

console.log('Ana,Maria,Pedro'.split(','))