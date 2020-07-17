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
        let array = string.split("");
        let isPalindrome = true;
        for (let index in array) {
          if (array[index] != string[(string.length - 1) - index]) {
            isPalindrome = false;
          }
        }
        return isPalindrome;
      }
console.log(verifypalindrome('arara'))


//Exercício 2 - Parte II

let array = [2, 3, 6, 7, 10, 1];
for (i=0; i<array.length; i++) {
    if (array[i] > array[i+1]) {
        console.log(i)
    }
}

//Exercício 3 - Parte II

