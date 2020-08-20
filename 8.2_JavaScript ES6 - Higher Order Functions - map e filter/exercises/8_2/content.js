//Módulo 8.2

//O "filter" é bem parecido com o find. O que o filter traz de novo é que, em vez de retornar apenas um elemento, ele retornará todos os elementos em um array que satisfaçam à condição verificada pela função. 

//Exemplo I
const numbers = [19, 21, 30, 3, 45, 22, 15];
const isEven = numbers.filter((number) => number % 2 === 0);

console.log(isEven); // [ 30, 22 ]

//O "map" itera sobre os itens do array e retorna um novo array com a condição que foi solicitada. É possível até unir dois arrays em um novo.

//Exemplo I 
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map(number => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]