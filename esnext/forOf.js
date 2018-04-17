for (let letra of 'Arthur'){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

for (let i in assuntosEcma){
    console.log(i)
}

// Valores dos itens do vetor
for (let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', {abordado : true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}],
])

// Itens do map
for (let assunto of assuntoMap){
    console.log(assunto)
}

// chave do item do map
for (let chave of assuntoMap.keys()){
    console.log(chave)
}

// Valor do item do map
for (let valor of assuntoMap.values()){
    console.log(valor)
}

// Desetruturando item do map em chave a valor
for (let [ch, vl] of assuntoMap.entries()){
    console.log(ch, vl)
}


const s = new Set(['a', 'b', 'c'])

// Valor do item no set
for (let letra of s){
    console.log(letra)
}