let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1 // Tem prioridade em uma equação em relacão ao num1++
console.log(num1)

console.log(++num1 === num2--) // O num1 é incrementado antes da comparação, e o num2 é decrementado depois da comparacao, pois ++ precedente tem prioridade
console.log(num1 === num2)