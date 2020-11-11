// 1A:
// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10

const palla = {
  'Nome' : 'palla',
  'Peso' : 10
}
console.log(`La nostra palla sarà quindi :
  nome :${palla.Nome}
  peso : ${palla.Peso}
  `);

// 1B:
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

let nuovoPeso = parseInt(prompt('Inserisci nuovo peso palla'));

palla.Peso = nuovoPeso;
console.log(`La nostra palla dopo modifica peso sarà:
  nome :${palla.Nome}
  peso : ${palla.Peso}
  `);
