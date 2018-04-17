function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 4))
console.log(area(10, 4))
console.log(area(10))
console.log(area())
console.log(area(2, 5, 7, 2, 1))
