//Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
console.log(myArray);

// chiediamo utente primo numero index
var numeroUno = parseInt(prompt('Inserisci un numero tra 0 e 5'));
console.log(numeroUno);

// chiediamo utente secondo numero index
var numeroDue = parseInt(prompt('Inserisci un numero tra 0 e 5'));
console.log(numeroDue);

// nuovo array con sole persone indicate da numero index inserito da utente
var nuovoArray = [];

// pushiamo in nuovo array la selezione index fatta da utente con numeroDue + 1 perche senno escluderebbe numero index selezionato
nuovoArray.push(myArray.slice(numeroUno , numeroDue + 1));

console.log(nuovoArray);
