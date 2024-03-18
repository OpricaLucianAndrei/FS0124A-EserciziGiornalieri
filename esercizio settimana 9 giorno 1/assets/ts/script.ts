interface Smartphone {
    credito: number;
    numeroChiamate: number;
}

class User implements Smartphone {
    nome: string;
    cognome: string;
    credito: number;
    numeroChiamate: number;
    tempiChiamate: number[];

    constructor(nome: string, cognome: string, credito: number = 0, numeroChiamate: number = 0) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
        this.tempiChiamate = [];
    }

    ricarica(ammontare: number): number {
        this.credito += ammontare;
        return this.credito;
    }

    effettuaChiamata(): void {
        const costoChiamata = 0.2; 
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate++;
            this.tempiChiamate.push(Date.now());
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    getDurataUltimaChiamata(): number {
        if (this.tempiChiamate.length === 0) {
            return 0; 
        }
        const tempoInizioUltimaChiamata = this.tempiChiamate[this.tempiChiamate.length - 1];
        const tempoFineUltimaChiamata = Date.now();
        return (tempoFineUltimaChiamata - tempoInizioUltimaChiamata) / 1000;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
        this.tempiChiamate = [];
    }

    verificaSaldo(): number {
        return this.credito;
    }
}

const utente1 = new User("Mario", "Rossi");
console.log("Credito iniziale:", utente1.verificaSaldo());
console.log("Numero chiamate iniziale:", utente1.getNumeroChiamate());

const btnRicarica = document.getElementById('btnRicarica') as HTMLButtonElement;
const ricaricaCredito = document.getElementById('ricaricaCredito') as HTMLInputElement;
btnRicarica.addEventListener('click', () => {
    const valoreRicarica = parseFloat(ricaricaCredito.value);
    utente1.ricarica(valoreRicarica);
    console.log("Credito dopo la ricarica:", utente1.verificaSaldo().toFixed(2));
});

const btnChiama = document.getElementById('btnChiama') as HTMLButtonElement;
btnChiama.addEventListener('click', () => {
    utente1.effettuaChiamata();
});

const btnChiudi = document.getElementById('btnChiudi') as HTMLButtonElement;
btnChiudi.addEventListener('click', () => {
    console.log("Chiamate effettuate:", utente1.getNumeroChiamate());
    console.log("Credito dopo la chiamata:", utente1.verificaSaldo().toFixed(2));
    console.log("Durata effettiva dell'ultima chiamata:", utente1.getDurataUltimaChiamata().toFixed(2), "secondi");
});

const btnAzzeraNumChiamate = document.getElementById('btnAzzeraNumChiamate') as HTMLButtonElement;
btnAzzeraNumChiamate.addEventListener('click', () => {
    utente1.azzeraChiamate();
    console.log("Numero chiamate dopo l'azzeramento:", utente1.getNumeroChiamate());
});
