//console.log(global)
// Criar objetos globai apenas quando realmente necessário!!!
global.MinhaApp = Object.freeze({ 
    saudacao() {
        return 'Sou onipresente'
    },
    nome: 'Sistema Legal'
})