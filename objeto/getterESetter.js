const sequencia = {
    _valor: 1, // Convenção: colocar _ antes do nome da variável é uma convenção que indica privacidade, mas não quer dizer nada em nível de linguagem
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

