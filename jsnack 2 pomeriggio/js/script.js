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

// copia array di partenza a cui aggiungere position
const arrayObj2 = [...arrayObj];

const randomLetter = (lettera) => {
  let result = '';
  const lettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lettereLength = lettere.length;
  for ( let i = 0; i < 1; i++ ) {
     result = lettere.charAt(Math.floor(Math.random() * lettereLength));
  }
  return result;
}


// ciclo arrayObj2 e inserisco per ogni oggetto index, nuova proprietà position e lettera random ricavata da funzione
for (var i = 0; i < arrayObj2.length; i++) {
  var position = randomLetter(1);
  arrayObj2[i].position = position;
}

console.log(arrayObj2);
