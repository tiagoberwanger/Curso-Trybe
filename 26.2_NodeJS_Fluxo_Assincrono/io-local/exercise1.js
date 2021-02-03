function exercise1 (a, b, c) {
  return new Promise((resolve, reject) => {
    if (a === isNaN || b === isNaN || c === isNaN) {
      return reject(new Error (('Digite apenas números!')))
    } 
    return resolve(a + b);
  })
    .then((result) => {
      if (result*c < 50) {
        return Promise.reject(new Error (('Valor muito baixo!')))
      }
      return result*c;
    })
    .catch(error => console.error(error.message))
}

exercise1 (9, 1, 6).then((result) => console.log(result));


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