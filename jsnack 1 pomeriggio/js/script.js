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

// usiamo filter di myArray per stabilire condizione che nel caso index myArray >= numero inserito in prompt e index myArray <= valore inserito secondo prompt, allora deve ritornare un nuovoArray con elementi con index compresi nelle condizioni indicate
const nuovoArray =  myArray.filter((element, index) => {
  if (index >= numeroUno && index <= numeroDue) {
    console.log(element , index);
    return element; //anche scrivendo index riporta comunque non il numero index ma i nomi dell' array
  }
});

console.log(nuovoArray);
