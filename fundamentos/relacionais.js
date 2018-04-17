console.log('01)', '1' == 1) // Compara apenas o valor
console.log('02)', '1' === 1) // Compara o valor e o tipo
console.log('03)', '3' != 3) // Compara apenas o valor
console.log('04)', '3' !== 3) // Compara o valor e o tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // Cria datas
const d2 = new Date(0)
console.log('09)', d1 === d2) // Vai dar false porque compara endereços de memória, e não os respectivos valores
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // Compara os valores

console.log('12)', undefined == null)
console.log('13)', undefined === null)