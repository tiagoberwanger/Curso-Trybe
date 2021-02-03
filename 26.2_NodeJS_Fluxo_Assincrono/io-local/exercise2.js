async function exercise2 (a, b, c) {
  const message = 'Valor muito baixo!'
  if (a === isNaN || b === isNaN || c === isNaN) {
    return new Error (('Digite apenas números!'))
  }
  const result = a + b;
  if (result*c < 50) {
      return new Error (('Valor muito baixo!'))
  }
  return result*c;
}

exercise2(9, 2, 7).then((result) => console.log(result))

// const mathOperations = async (x, y, z) => {
//   if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
//     return Promise.reject(new Error('Digite apenas números'));
//   }
//   const sum = x + y;
//   const mul = sum * z;
//   return mul < 50 ? Promise.reject(new Error('Valor muito baixo')) : mul;
// };

// mathOperations(5, 7, 10);