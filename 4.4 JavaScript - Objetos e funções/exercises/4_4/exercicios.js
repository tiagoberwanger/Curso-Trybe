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

