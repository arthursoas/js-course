const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 2', function(){ // de-5-em-5-seg qualquer-minuto 12-horas qualquer-mês qualquer-dia-do-mes terça-feira
    console.log('executando Tarefa 1!', new Date().getSeconds())
}) 

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa!')
}, 20000) // Cancela a tarefa1 após 20 seg de execução

const regra = new schedule.RecurrenceRule() // Cria nova regra de disparador de tarefa
regra.dayOfWeek = [new schedule.Range(1, 5)] // nos dias da semana entre segunda e sexta
regra.hour = 14 // Quando hora for igual a 14
regra.second = 30 // Quando segundo for igual a 30
// Em qualquer minuto

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})