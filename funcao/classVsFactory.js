// Pode gerar problemas de contexto léxico dependendo de onde a classe é chamada por causa do this
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Não possui problemas de contexto, pois a função arrow têm ciência de onde ela foi declarada
const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Maria')
p2.falar()