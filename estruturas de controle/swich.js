const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10: case 9: // Se for 10 ou 9, faça...
            console.log('Quadro de Honra')
            break // Se não clocar o Break, todas as outras condições abaixo serão executadas
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.23)
imprimirResultado(-1)
imprimirResultado(11)