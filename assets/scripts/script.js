function inserirNovaTarefa() {
    var novaTarefa = window.document.getElementById('nova-tarefa')
    var addTarefa = novaTarefa.value
    var tarefas = window.document.getElementById('container-tarefas')

    if (addTarefa == "") {
        alert("Campo vazio, por favor insira uma Tarefa.")

    } else {
        /* Outra forma de criar uma Tag filha.
        const item = document.createElement('p')
        item.innerHTML = `${addTarefa}`
        document.getElementById('container-tarefas').appendChild(item)
        */

        tarefas.insertAdjacentHTML('beforeend', `<p class="tarefa">${addTarefa}<p>`);

    }
}