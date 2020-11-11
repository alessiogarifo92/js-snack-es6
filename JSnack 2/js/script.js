// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var arrayBici = [
  {
    'nome' : 'cross',
    'peso' : 35
  },
  {
    'nome' : 'venezia',
    'peso' : 80
  },
  {
    'nome' : 'graziella',
    'peso' : 16
  },
  {
    'nome' : 'bmx',
    'peso' : 23
  },
  {
    'nome' : 'narnia',
    'peso' : 55
  }
];

console.log(arrayBici);

var piuLeggera = arrayBici[0];

arrayBici.forEach((item, i) => {
  if ( piuLeggera.peso > arrayBici[i].peso) {
    piuLeggera =  arrayBici[i];
  }
});
console.log(piuLeggera);


// creiamo ciclo array
// for (var i = 0; i < arrayBici.length; i++) {
  // se piuLeggera a cui abbiamo dato posizione 0, avra un peso maggiore di quella successiva nel ciclo, allora quella con peso minore dell array andra a sostituire attuale piuLeggera e cosi fino alla fine del ciclo e ci rilascerà quindi la bicicletta con peso minore
//   if (piuLeggera.peso > arrayBici[i].peso) {
//     piuLeggera = arrayBici[i];
//   }
// };

// console.log(piuLeggera);

// con questo si trova solo peso minore
// var min = Math.min.apply(null, arrayBici.map(function(a){return a.peso;}));
// console.log(min);
