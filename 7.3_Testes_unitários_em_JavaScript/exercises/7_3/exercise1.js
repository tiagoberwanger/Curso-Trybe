//Exercise 1 

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(typeof sum, 'function');

assert.strictEqual(sum(4, 5), 9);

assert.strictEqual(sum(0, 0), 0);

assert.throws (function () {
    sum(4, "5");
})

assert.throws (function () {
  sum(4, "5");
}, /paramenters must be numbers/)

