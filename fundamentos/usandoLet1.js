let numero = 1
{
    let numero = 2 // Let possui escopo por bloco, não apenas por função
    console.log('dentro =', numero)
}
console.log('fora =', numero)
