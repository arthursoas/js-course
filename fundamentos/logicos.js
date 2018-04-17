function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // Se um dos trabalhos for true
    const comprarTv50 = trabalho1 && trabalho2 // Se os dois trabalhos forem true
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // Se pelo menos um dos trabalhos for true
    const manterSaudavel = !comprarSorvete

    return{comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    // Os campos do objeto terão o mesmo nome das constantes, e terão como valor o valor das própris contantes
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))