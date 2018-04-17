const produtos = [
    {nome: 'Motebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 5.99, fragil: false},
]

console.log(produtos.filter(function(elemento){ // Se a condição é verdadeira, ela á adicionada ao novo um novo array
    return elemento.preco > 500 && elemento.fragil 
}))

console.log('-=-=-=-=-=-=--=-=-=-=-==-=-=-=-=--=--=--==-==-==-=-=-')

const caro = elemento => elemento.preco >= 500
const fragil = elemento => elemento.fragil

console.log(produtos.filter(caro).filter(fragil))