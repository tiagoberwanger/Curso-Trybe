//Dada uma matriz de matrizes, transforme em uma única matriz.  
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

//Forma 1
function flatten() {
  return arrays
  .reduce((acumulador, elemento) => acumulador.concat(elemento));
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);

//Forma 2
function flatten() {
return arrays.flatMap(elements => elements)
}
