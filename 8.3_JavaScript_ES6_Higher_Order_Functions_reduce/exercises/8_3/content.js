//O método "reduce()" executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno. A função reducer é alimentada por quatro parâmetros: Acumulador (acc),  Valor Atual (cur),  Index Atual (idx), Array original (src). O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

//Exemplo I
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); 
// O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113
//Ou seja:
const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

//Exemplo II
//Com .filter e .reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = numbers.filter(even => even % 2 == 0).reduce((result, number) => result + number); 
console.log(sumEven);
//Só com .reduce
const sumPair = (currentValue, number) => ((number % 2 === 0) ? currentValue + number : currentValue);
const sumNumbers = (array) => array.reduce(sumPair);
console.log(sumNumbers(numbers));