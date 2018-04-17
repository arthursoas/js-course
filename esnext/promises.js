function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => { // Retorna um callback, podendo ser o resolve ou o reject
        // faz alguma coisa dentro do bloco
        setTimeout(() => {
            if(segundos < 3)
                resolve(frase + ' fui resolvido') // Aceita apenas um parâmetro
            else
                reject(frase + ' fui rejeitado')
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal')
    .then(resolucao => resolucao.concat('!!!')) // Pega o retorno de falarDepoisDe dentro parâmetro resolve da promessa 
    .then(resultadoDeCima => console.log(resultadoDeCima)) // interação sobre o resultado do .then anterior
    .catch(rejeicao => console.log(rejeicao))

console.log('Passei')