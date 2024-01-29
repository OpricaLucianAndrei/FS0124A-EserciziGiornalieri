/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* I principali datatype in Javascript sono:
>Stringa: è una sequenza di uno o più caratteri, che generalmente sono lettere ma possono essere anche numeri e simboli, 
          con l'accortezza che il contenuto ha valore testuale, perciò i numeri e le lettere saranno considerati parte integrante di un testo
          e non valori a sè stanti. Le stringhe generalmente sono definite tramite l'uso degli apici o delle virgolette.
>Numero: è un numero, o una sequenza di numeri, che in questo caso hanno la funzione che ci aspettiamo, sono effettivamente numeri.
        è importante sottolinerare il fatto che possiamo rappresentare sia numeri interi che decimali, con l'accortezza dell'uso del punto 
        come separatore della parte decimale. Tocca tenere a mente anche che lo 0 è il primo valore positivo. Per dichiararlo non serve nessun 
        tipo di simbolo o carattere speciale.
>Boolean: questo dato ammette solo due valori, TRUE o FALSE, e viene usato quando abbiamo strutture condizionali, 
          per esempio: esegui x se y è TRUE, altrimenti se y è FALSE fermati o esegui altro a seconda del caso.
>Null: indica l'assenza intenzionale di un oggetto, e nella logica booleana indica una condizione false.
>Undefined: indica che ad una variabile non è stato assegnato un valore.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = 'Lucian Andrei';
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(12 + 20);

//Oppure

let numero1 = 12;
let numero2 = 20;
let addizione = numero1 + numero2;
console.log(addizione);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = 'Oprica';
console.log(myName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4 - x);

//Oppure

let sottrazione = 4 - x;
console.log(sottrazione);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john';
let name2 = 'John';

console.log('name1 e name2 sono uguali?', name1 === name2);

//Extra

console.log('name1 e name2 sono uguali in lowercase?', name1.toLowerCase === name2.toLowerCase);
