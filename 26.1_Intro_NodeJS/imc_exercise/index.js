const readline = require('readline-sync');

function IMC(height, weight) {

  IMC = (weight/(height*height)).toFixed(2);

  if(IMC<18.5)
  {index = "é falso magro(a)."}

  else if (IMC>=18.5 && IMC<=24.9)
  {index = "tá sussa."}

  else if (IMC>24.9 &&  IMC<=29.9)
  {index = "é um gordo inútil."}

  else {index = "vai morrer!!!"}

  return (`${IMC}, você ${index}`);
};

const weight = readline.question('Digite o peso: ')
const height = readline.question('Digite a altura: ')
const result = IMC(height, weight);
console.log('IMC: %s', result);