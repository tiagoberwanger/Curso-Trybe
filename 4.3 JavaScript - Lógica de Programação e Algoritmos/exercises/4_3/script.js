//4.3 JavaScript - Lógica de Programação e Algoritmos

//Exercício 1

for(var n=1; n<=5; n++){
    console.log("*****");
 }

 //v2

 let linha = " ";
 let simbolo = "*";

 for (n=0; n<5; n++) {
    linha = linha + simbolo
 }

 for (n=0; n<5; n++) {
    console.log(linha) 
 }

//Exercício 2

for(var n=1; n<=5; n++){
    console.log("*".repeat(n));
 }

 //v2

 let n = 5
 let linha = ' ';
 let simbolo = "*";

 for (let i=0; i<=n; i++) {
    console.log(linha);
    linha = linha + simbolo;
 }

 //Exercício 3

let linha = " "
let simbolo = "*"

for(let l=5, s=0; l>=0, s<=5; l--, s++) {
    console.log(linha.repeat(l) + simbolo.repeat(s))
}

//Exercício 4

for(let n=5, i=1; n>=0, i<=5; n--, i+=2){
    console.log(" ".repeat(n) + "*".repeat(i))
}