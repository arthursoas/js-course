const valor = 'Global'

function minhaFuncao(){
    console.log(valor) // Ela vai retornar 'Global' pois ela carrega o contexto onde ela foi declarada, e não onde ela foi chamada
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()