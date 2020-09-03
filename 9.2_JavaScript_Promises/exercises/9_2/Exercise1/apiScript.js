const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

// Exercício 1
const fetchJoke = () => {
    fetch (API_URL, myObject)
        .then(response => response.json())
        .then(data => 
            document.getElementById('jokeContainer').innerText = data.joke
        );
};

window.onload = () => fetchJoke();

//Exercício 2
const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) => {
      const myArray = Array.from(
        { length: 10 },
        () =>  Math.floor(Math.random() * 50) + 1
      );
      const sum = myArray.map(number => number * number)
                         .reduce((number, acc) => number + acc, 0);
  
      (sum < 8000) ? resolve() : reject();
    });
  
    myPromise
      .then(() => console.log('Deu bom'))
      .catch(() => console.log('Deu ruim'));
  };
  
  fetchPromise();

  //Exercício 3
  const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) => {
      const myArray = Array.from(
        { length: 10 },
        () =>  Math.floor(Math.random() * 50) + 1
      );
      const sum = myArray.map(number => number * number)
                         .reduce((number, acc) => number + acc, 0);
  
      (sum < 8000) ? resolve(sum) : reject();
    });
  
    myPromise
      .then(sum => [2, 3, 5, 10].map(number => sum / number))
      .catch(() => console.log('Deu ruim!'));
  };
  
  fetchPromise();

//   Exercício 4

  const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) => {
      const myArray = Array.from(
        { length: 10 },
        () =>  Math.floor(Math.random() * 50) + 1
      );
      const sum = myArray.map(number => number * number)
                         .reduce((number, acc) => number + acc, 0);
  
      (sum < 8000) ? resolve(sum) : reject();
    });
  
    myPromise
      .then(sum => [2, 3, 5, 10].map(number => sum / number))
      .catch(() =>
        console.log('É mais de oito mil! Essa promise deve estar quebrada!')
      );
  };
  
  fetchPromise();

//   Exercício 5

  const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) => {
      const myArray = Array.from(
        { length: 10 },
        () =>  Math.floor(Math.random() * 50) + 1
      );
      const sum = myArray.map(number => number * number)
                         .reduce((number, acc) => number + acc, 0);
  
      (sum < 8000) ? resolve(sum) : reject();
    });
  
    myPromise
      .then(sum => [2, 3, 5, 10].map(number => sum / number))
      .then(array => array.reduce((number, acc) => number + acc, 0))
      .catch(() =>
        console.log('É mais de oito mil! Essa promise deve estar quebrada!')
      );
  };
  
  fetchPromise();

//   PS: TODOS OS EXERCÍCIOS SÃO RESOLUÇÕES DO GABARITO, NÃO COMPREENDI O CONTEÚDO DO DIA.
