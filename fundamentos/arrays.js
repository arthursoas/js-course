const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // Posição fora do array

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // Adiciona novos itens ao array
console.log(valores)

console.log(valores.pop()) // Retira o último elemento do array
console.log(valores)

delete valores[0] // Deleta um item específico do array
console.log(valores)

console.log(typeof valores)