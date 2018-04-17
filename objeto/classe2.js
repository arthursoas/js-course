class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo{ // Relação de protótipo
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // Atribui o sobrenome passado como parâmero ao 'sobrenome' do Avô
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva') // Atribui 'Silva' ao 'sobrenome' da classe Pai
    }
}

const filho = new Filho
console.log(filho)