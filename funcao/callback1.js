const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice, param1 = 0){
    console.log(`${indice + 1}. ${nome} [${param1}`)
}

fabricantes.forEach(imprimir) // Sempre que uma interação do forEach é concluída, a função imprimir é chadama

fabricantes.forEach(fabricante => console.log(fabricante))