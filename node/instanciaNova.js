// Uma factory retorna um novo objeto
module.exports = () => { 
    return{
        valor: 1,
        inc() {
            this.valor++
        }
    }
}
// Ao invés de atrbuir um objeto diretamente ao module.exports, criar uma factory criará uma nova intância sempre que o arquivo for importado