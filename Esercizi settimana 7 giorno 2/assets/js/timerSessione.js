const secondiTrascorsi = document.getElementById("secondi");

function aggiornaContatore() {
    let tempoTrascorso = sessionStorage.getItem("tempoTrascorso") || 0;
    tempoTrascorso++;
    sessionStorage.setItem("tempoTrascorso", tempoTrascorso);
    secondiTrascorsi.innerText = `${tempoTrascorso}`;
  }
  
  setInterval(aggiornaContatore, 1000);
  aggiornaContatore();