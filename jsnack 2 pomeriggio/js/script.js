// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
//Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
console.log(arrayObj);

// creiamo costante con tutte le lettere dell alfabeto che andremo poi a prendere random
const lettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// copia array di partenza a cui aggiungere position
const arrayObj2 = arrayObj.map(element => (
  { //dobbiamo inserire i puntini davanti all' elemento e dentro la graffa, per andare a prendere le proprietà dentro element, senza puntini avrebbe preso l intera linea dell array e non avremmo potuto modificarne le proprietà
    ...element ,
    position : lettere[Math.floor(Math.random() * lettere.length)]
  })
);

console.log(arrayObj2);
