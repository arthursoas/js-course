{
    {
        {
            { 
                var sera = 'Será???' // Toda variável criada fora de uma função, terá escopo global no código
                console.log(sera)                 
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123 // Visível apenas dentro da funcition
    console.log(local)
}

teste()
//console.log(local) // O escopo da variavel está apenas dentro da função