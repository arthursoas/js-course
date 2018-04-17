Object.prototype.attr0 = 'Z' // Criaou um atributo dentro do prototype de todos os objetos - EVITAR USAR

const avo = { attr1: 'A'}

const pai = {
    __proto__: avo,
    attr2: 'B',
    attr3: 3
}

const filho = {
    __proto__: pai, // Define quem é o protótipo (classe pai)
    attr3: 'C'
}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}mk/h de ${this.velMax}km/h`
    }    
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super referncia o pai
    } // shadowing
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())