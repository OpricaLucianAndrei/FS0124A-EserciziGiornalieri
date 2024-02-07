function aggiungiTask() {
    const task = document.getElementById('task');
    const testoTask = task.value.trim();

    if (testoTask !== '') {
        const listaTask = document.getElementById('listaTask');
        const nuovoTask = document.createElement('li');
        nuovoTask.innerHTML = `${testoTask} &nbsp;`;
        nuovoTask.style.cursor = "pointer";
        nuovoTask.addEventListener('click', eventoTask);

        const pulsanteCancella = document.createElement('button');
        pulsanteCancella.innerHTML = '<ion-icon name="trash-bin"></ion-icon>';
        pulsanteCancella.style.color = 'white';
        pulsanteCancella.style.backgroundColor = '#4D225F';
        pulsanteCancella.style.borderRadius = '5px';
        pulsanteCancella.style.cursor = "pointer";
        pulsanteCancella.addEventListener('click', cancellaTask);
        nuovoTask.appendChild(pulsanteCancella);
        listaTask.appendChild(nuovoTask);

        task.value = '';
    }
}

function eventoTask(event) {
    const taskCliccato = event.target;
    if (!taskCliccato.classList.contains('completed')) {
        taskCliccato.style.textDecoration = 'line-through';
        taskCliccato.classList.add('completed');
    } else {
        taskCliccato.style.textDecoration = 'none';
        taskCliccato.classList.remove('completed');
    }
}

function cancellaTask(event) {
    const pulsanteCliccato = event.currentTarget;
    const elementoLista = pulsanteCliccato.parentNode;
    elementoLista.remove();
}
