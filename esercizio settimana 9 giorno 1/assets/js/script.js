var User = /** @class */ (function () {
    function User(nome, cognome, credito, numeroChiamate) {
        if (credito === void 0) { credito = 0; }
        if (numeroChiamate === void 0) { numeroChiamate = 0; }
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
        this.tempiChiamate = [];
    }
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
        return this.credito;
    };
    User.prototype.effettuaChiamata = function () {
        var costoChiamata = 0.2;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate++;
            this.tempiChiamate.push(Date.now());
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.getDurataUltimaChiamata = function () {
        if (this.tempiChiamate.length === 0) {
            return 0;
        }
        var tempoInizioUltimaChiamata = this.tempiChiamate[this.tempiChiamate.length - 1];
        var tempoFineUltimaChiamata = Date.now();
        return (tempoFineUltimaChiamata - tempoInizioUltimaChiamata) / 1000;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        this.tempiChiamate = [];
    };
    User.prototype.verificaSaldo = function () {
        return this.credito;
    };
    return User;
}());
var utente1 = new User("Mario", "Rossi");
console.log("Credito iniziale:", utente1.verificaSaldo());
console.log("Numero chiamate iniziale:", utente1.getNumeroChiamate());
var btnRicarica = document.getElementById('btnRicarica');
var ricaricaCredito = document.getElementById('ricaricaCredito');
btnRicarica.addEventListener('click', function () {
    var valoreRicarica = parseFloat(ricaricaCredito.value);
    utente1.ricarica(valoreRicarica);
    console.log("Credito dopo la ricarica:", utente1.verificaSaldo().toFixed(2));
});
var btnChiama = document.getElementById('btnChiama');
btnChiama.addEventListener('click', function () {
    utente1.effettuaChiamata();
});
var btnChiudi = document.getElementById('btnChiudi');
btnChiudi.addEventListener('click', function () {
    console.log("Chiamate effettuate:", utente1.getNumeroChiamate());
    console.log("Credito dopo la chiamata:", utente1.verificaSaldo().toFixed(2));
    console.log("Durata effettiva dell'ultima chiamata:", utente1.getDurataUltimaChiamata().toFixed(2), "secondi");
});
var btnAzzeraNumChiamate = document.getElementById('btnAzzeraNumChiamate');
btnAzzeraNumChiamate.addEventListener('click', function () {
    utente1.azzeraChiamate();
    console.log("Numero chiamate dopo l'azzeramento:", utente1.getNumeroChiamate());
});
