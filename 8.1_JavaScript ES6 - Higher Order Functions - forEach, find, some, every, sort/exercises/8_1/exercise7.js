const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = false;


// Exercício VII - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
function authorUnique() {
    let newArray= []
    for (let i in books) {
      newArray.push(books[i].author.birthYear) 
    }
    return newArray.some(i => newArray[i] !== newArray[i+1]);
}

assert.equal(authorUnique(), expected_result);

//NÃO FUNCIONOU PORQUE?
// function authorUnique() {
//     for (let i in books) {
//         if ((books[i].author.birthYear) === (books[i + 1].author.birthYear)) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(authorUnique())