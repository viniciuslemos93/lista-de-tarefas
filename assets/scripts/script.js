function inserirNovaTarefa() {
    const novaTarefa = window.document.getElementById('nova-tarefa')
    const addTarefa = novaTarefa.value
    const tarefas = window.document.getElementById('container-tarefas')

    if (addTarefa == "") {
        alert("Campo vazio, por favor insira uma Tarefa.")

    } else {
        /* Outra forma de criar uma Tag filha.
        const item = document.createElement('p')
        item.innerHTML = `${addTarefa}`
        document.getElementById('container-tarefas').appendChild(item)
        */
        //tarefas.insertAdjacentHTML('beforeend', `<p class="tarefa">${addTarefa}<p>`);

        const cadaTarefa = `
            <div class="cadaTarefa">
            <p class="tarefa">
            ${addTarefa}
            <p>
            <input type="button" value="X">
            </div>
            `
tarefas.insertAdjacentHTML('beforeend', cadaTarefa);
        
        novaTarefa.value = ''
        novaTarefa.focus()
    }
}