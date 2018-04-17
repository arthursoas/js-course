const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar // Removi a função falar do contexto do objeto pessoa
falar() // Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // O contexto continua apontando para o objeto pessoa com o método Bind
falarDePessoa()