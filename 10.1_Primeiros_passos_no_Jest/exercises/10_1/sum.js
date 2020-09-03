//Exercise 1 
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = sum;