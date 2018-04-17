function Pessoa(){
    this.idade = 0 // Cria um atributo idade dentro do escopo 'Pessoa'

    const self = this // Armazena o this de 'Pessoa' dentro da constante self
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa
