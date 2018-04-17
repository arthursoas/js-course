Array.prototype.forEach2 = function(callback) {
    for (let i = 0 ; i < this.length; i++){ // Para cada posição no array, retorne como um callback...
        // Sempre que é chamado, resolve o conteúdo dentro da chamada da fução
        // No caso, sempre que "callback(this[i], i, this)" é chamado, o "console.log(`${indice + 1}) ${nome}`)" será executado na chamada da função
        callback(this[i], i, this)
    }
}

const aprovados = ['Ahgtha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){ // Os parâmetros são lidos não pelo cabeçalho da função, mas sim pela chamada de "callback(this[i], i, this)"
    console.log(`${indice + 1}) ${nome}`)
})