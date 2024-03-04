class Utente {
    constructor(_firstName, _lastName, _age = 0, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }

    confrontoEta(y) {
        let frase = document.getElementById('titolo');

        if (this.age > y.age){
            return frase.innerHTML =  `${this.firstName} ${this.lastName} è più vecchio di ${y.firstName} ${y.lastName}`;
        } else if (this.age < y.age) {
            return frase.innerHTML = `${y.firstName} ${y.lastName} è più vecchio di ${this.firstName} ${this.lastName}`;
        } else {
            return frase.innerHTML = `${y.firstName} ${y.lastName} ha la stessa età di ${this.firstName} ${this.lastName}`;
        } 
        
    }
}


const utente1 = new Utente("Mario", "Rossi", 25, "Roma");
const utente2 = new Utente("Aldo", "Bianchi", 50, "Milano");
const utente3 = new Utente("Cristiano", "Ronaldo", 39, "Funchal");
const utente4 = new Utente("Lionel", "Messi", 36, "Buenos Aires");
const utente5 = new Utente("Mario", "Balotelli", 33, "Palermo");

console.log(utente1.confrontoEta(utente2));