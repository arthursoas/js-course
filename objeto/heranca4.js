function meuObjeto() {}

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__) // obj1 e obj2 aponta para o prototype da funcao

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Apenas curiosidades...
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)