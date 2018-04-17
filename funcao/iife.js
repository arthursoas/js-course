// IIFE - Immediately Invoked Function Expression

(function(){ // Tudo que é criado dentro de uma IIFE fica fora do escopo global
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()