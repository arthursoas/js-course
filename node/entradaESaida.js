const anonimo = process.argv.indexOf('-a') !== -1 // Se o índece de -a é diferente de -1 ela existe
console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ') 
    process.stdin.on('data', data => {  // Quando digita no telcado e pressiona Enter
        const nome = data.toString().replace('\n', '') // Remove o enter do final da string

        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    })
}