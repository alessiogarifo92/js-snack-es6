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
