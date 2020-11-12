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

// creiao costante che ci dia ogni volta una lettera random

const randomLetter = (lettera) => {
  let result = '';
  const lettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lettereLength = lettere.length;
  for ( let i = 0; i < 1; i++ ) {
     result = lettere.charAt(Math.floor(Math.random() * lettereLength));
  }
  return result;
}

// copia array di partenza a cui aggiungere position
const arrayObj2 = arrayObj.map(element => (
  { //dobbiamo inserire i puntini davanti all' elemento e dentro la graffa, per andare a prendere le proprietà dentro element, senza puntini avrebbe preso l intera linea dell array e non avremmo potuto modificarne le proprietà
    ...element ,
    position : randomLetter(1)
  })
);

console.log(arrayObj2);
