const nums = [1,2,3,4,5,6,7,8,9,10]

for(let x in nums){
    if(x == 5){
        break // interrompe a excução do laço
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums){
    if(y == 5){
        continue // Ignora a repetição corrente do laço e vai para a próxima
    }
    console.log(`${y} = ${nums[y]}`)
}

// NÃO USAR 
externo: for(let a in nums){ // Cria um rótulo para o for mais externo
    for (let b in nums) {
        if(a == 2 && b == 3)
            break externo // Cria um break apontando para o rótulo, interrompendo o laço associado ao rótulo
        
        console.log(`Par = ${a},${b}`)
    }
}