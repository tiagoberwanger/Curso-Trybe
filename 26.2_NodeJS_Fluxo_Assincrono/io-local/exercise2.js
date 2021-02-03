const chalk = require('chalk');

async function exercise2 (a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error ('Digite apenas números!')
  }
  const soma = a + b;
  const result = soma*c;
  return result < 50 ? Promise.reject(new Error("número muito baixo")) : result
}

async function resultado() {
  try {
    await exercise2(9, 6, 29).then(result => console.log(chalk.green(result)));
  } catch (e) {
    console.log(chalk.red(e));
  }
}

resultado();

// const mathOperations = async (x, y, z) => {
//   if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
//     return Promise.reject(new Error('Digite apenas números'));
//   }
//   const sum = x + y;
//   const mul = sum * z;
//   return mul < 50 ? Promise.reject(new Error('Valor muito baixo')) : mul;
// };

// mathOperations(5, 7, 10);