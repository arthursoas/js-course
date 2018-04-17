const prod1 = {} // Instância de um objeto
prod1.nome = 'Celular Ultra Mega' // Cria um atributo com um valor
prod1.preco = 4999.99
prod1['Desconto Legal'] = 1000.00 // Evitar criar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 49.90,
    obj: { // É possível criar objetos aninhados (um dentro do outro)
        prop1: 1,
        obj: {
            prop1: 2 // Nome de atributos de objetos aninhado podem se reptir
        }
    }
}

'{ "nome": "Camisa Polo",  "preco": 49.90 }' // Criação de um JSON (formato textual de um abjeto)

console.log(prod2)