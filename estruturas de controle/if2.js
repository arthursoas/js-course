function teste1(num){
    if(num > 7)
        console.log(num)
        console.log('Final') // Como não está em chaves, apenas a primeira linha é interpretada como parte do if
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ // Se olocar ; depois do if, o bloco abaixo dele não fica associado a ele
        console.log(num)
    }
}

teste2(6)
teste2(8)