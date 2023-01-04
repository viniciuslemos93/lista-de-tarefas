var novaTarefa = window.document.getElementById('nova-tarefa')
var addTarefa = novaTarefa.value
var tarefas = window.document.getElementById('container-tarefas')

function inserirNovaTarefa() {
    validarTarefa();
}
function validarTarefa () {
    var novaTarefa = window.document.getElementById('nova-tarefa')
    var tarefas = window.document.getElementById('container-tarefas')
    var addTarefa = novaTarefa.value
    if (novaTarefa == "") {
        alert("Campo vazio, por favor insira uma Tarefa.")

    } else {
        console.log(addTarefa)
        tarefas.innerText = `${tarefas}`
    }
}