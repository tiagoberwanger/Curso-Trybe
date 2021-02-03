const chalk = require('chalk');

function exercise1 (a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error (('Digite apenas números!')))
    } 
    return resolve(a + b);
  })
    .then((result) => {
      if (result*c < 50) {
        return Promise.reject(new Error (('Valor muito baixo!')))
      }
      return console.log(chalk.green(result*c));
    })
    .catch(err => console.log(chalk.red(err)))
}

console.log(exercise1 (9, 1, 10));


//GABARITO:
// function mathOperations(x, y, z) {
//   return new Promise((resolve, reject) => {
//     if ( typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
//      return reject(new Error('Digite apenas números'));
//     } 
//     resolve(x + y);
//   })
//     .then((r) => {
//       if (r*z < 50){
//         return Promise.reject(new Error('Valor muito baixo'));
//       }
//       return r*z;
//     })
// }

// mathOperations(1, 2, 4)