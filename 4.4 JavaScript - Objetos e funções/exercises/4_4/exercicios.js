//Exercícios 4.4 JavaScript - Objetos e funções

//Parte I - Objetos e For/In

//Exercício 1

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

console.log("Bem vinda, " + info.personagem)

//Exercício 2

info.recorrente = "sim"  

console.log(info)


//Exercício 3

for(let propriedade in info) {
    console.log(propriedade)
}

//Exercício 4

for(let propriedade in info) {
    console.log(info[propriedade])
}

//Exercício 5

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };
  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };
  
  console.log(info.personagem + " e " + info2.personagem)
  console.log(info.origem + " e " + info2.origem)
  console.log(info.nota + " e " + info2.nota)
  if(info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
    console.log('Ambos recorrentes')
  }

  
//Exercício 1 - Parte II

function verifypalindrome(string) {
  for (let i = 0; i <string.length; i += 1)
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    } 
  return true
}
let palindrome = verifypalindrome('arara')
console.log(palindrome)

//Exercício 2 - Parte II

function indexHighestValue (array) {
let indexHighest = array[0];
let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > indexHighest) {
      indexHighest = array[i];
      result = i;
    }
  }
  return result;
}
console.log(indexHighestValue([2, 3, 6, 7, 10, 1]));

//Exercício 3 - Parte II

function indexLowerValue (array) {
  let indexLowest = 0;
    for (let index in array) {
      if (array[indexLowest] > array[index]) {
        indexLowest = index;
      }
    }
    return indexLowest;
}
console.log(indexLowerValue ([2, 4, 6, 7, 10, 0, -3]));
