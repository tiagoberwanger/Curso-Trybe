//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names
    .map(letters => letters
    .split('a').length)
    .reduce((sum, elements) => sum + elements)
}

assert.deepEqual(containsA(), 20);