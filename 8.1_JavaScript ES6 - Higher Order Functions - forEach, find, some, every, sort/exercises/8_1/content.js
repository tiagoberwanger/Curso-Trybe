//Conteúdo - Hight Order Functions (HOF)

//O "forEach" percorre o array dado e executa a função passada para cada um dos seus valores, porém não retorna nenhum valor.
//forEach - Exemplo I
const meuArray = [2, 5, 12, 30, 37];
meuArray.forEach(elemento => {
    if(elemento % 2 === 0) { 
      console.log(`${elemento} é divísivel por 2!`)
      } 
})

//forEach - Exemplo II
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

//O "find" é utilizado para achar o primeiro elemento que satisfaça a condição passada. Então, a função que deverá ser passada precisa retornar true ou false. 
//find - Exemplo I
const numbers1 = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers1.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

//find - Exemplo II
const numbers2 = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers2.find(number => number % 5 === 0);

console.log(firstMultipleOf5); // 50

//"some" e "every" são parecidas. A primeira retorna true se ao menos um elemento de um array satisfaz a uma condição. A segunda retorna true se todos os elementos de um array satisfazem a uma condição. 
//some - Exemplo
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

//every - Exemplo 
const notes = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyNotes = (studentNotes) => {
    return Object.values(studentNotes).every((note) => note === 'Aprovado');
  };
  
  console.log(verifyNotes(notes)); // False

//o "sort" permite ordenar um array de acordo com algum critério. Caso não ouver, ordena sempre por ordem alfabética.
//sort - Exemplo I 
    const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
    food.sort();
    console.log(food); // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

//sort - Exemplo II
  const points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){ return a - b });
  console.log(points); // [1, 5, 10, 25, 40, 100]

//sort - Exemplo III
  const numbers4 = [10, 1, 2, 3]
  numbers4.sort(function(a, b){ return a - b });
  console.log(numbers4);

