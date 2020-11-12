// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadre = [
  {
    'nome' : 'Milan',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  },

  {
    'nome' : 'Sassuolo',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  },

  {
    'nome' : 'Roma',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  },

  {
    'nome' : 'Inter',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  },

  {
    'nome' : 'Juventus',
    'puntiFatti' : 0,
    'falliSubiti' : 0
  }
];

console.log(squadre);

// STE 2:
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

// arrow function per punti fatti random
let puntiFatti = () => Math.floor(Math.random() * Math.floor(100));

// arrow function per falli subiti random
let falliSubiti = () => Math.floor(Math.random() * Math.floor(50));

// creo nuovo array per inserire punti fatti squadre fine campionato e vedere chi ha vinto
const squadreFineCamp = squadre.map(team => (
  {
    ...team ,
    puntiFatti : puntiFatti()
  })
);

// uso sort per mostrare classifica squadra con piu punti (invertendo i due argomenti si otterrebbe punti a incrementare)
squadreFineCamp.sort(function(a,b) {
  return b.puntiFatti - a.puntiFatti;
});

let vincitore = squadreFineCamp[0].name;
console.log(squadreFineCamp);
console.log(vincitore + 'vincitrice del campionato Serie A 2020');
