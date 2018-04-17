const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]


//Sem callbak
const notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7)
        notasBaixas1.push(notas[i])

}

console.log(notasBaixas1)

// Com callbak
const notasBaixas2 = notas.filter(function(nota){ // funcition(nota) é um callback que para cada elemento retorna true ou false se nota < 7
    return nota < 7 // Se true, o item é adicionado em notasBaixas
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7) // igul notasBaixas2, porém com arrow functions
console.log(notasBaixas3)