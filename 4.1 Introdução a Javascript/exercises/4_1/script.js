//Exercício 1

let x = 10;
let y = 15;

console.log('Soma: ' + (x + y));
console.log('Subtração: ' + (x - y));
console.log('Multiplicação: ' + (x * y));
console.log('Divisão: ' + (x / y));
console.log('Módulo: ' + (x % y));

//Exercício 2

let x = 20;
let y = 25;

if (x > y) {
    console.log ("x é maior que y");
} else {
    console.log("y é maior que x");
}

//Exercício 3

let x = 30 
let y = 40
let z = 50

if (x > y && x > z) {
    console.log ("x é maior que y e z");
} else if (y > x && y > z) {
    console.log ("y é maior que x e z");
} else {
    console.log("z é maior que x e y");
}

//Exercício 4

let x = -1

if (x > 0 == true) {
    console.log("positive");
} else {
    console.log("negative");
}

//Exercício 5

let x = 30 
let y = 40
let z = 50

if (x + y + z === 180){
    console.log (true);
} else {
    console.log (false);
}

//Exercício 6

// Explicando o SWITCH: definida uma variável let = valor;
// 
//  Switch (expressão) {
//    case x:
//      bloco de código 1;
//      break;
//    case y:
//      bloco de código 2;
//      break;
//    default:
//      bloco de código final;
//  }

let pecaDeXadrez = 'bispo';

switch (pecaDeXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal e horizontal.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}

// Exercício 7

let nota = 80;

if (nota >= 90 && nota <= 100) {
    console.log("A")
} else if (nota >= 80 && nota < 90){
    console.log("B")
} else if (nota >= 70 && nota < 80){
    console.log("C")
} else if (nota >= 60 && nota < 70){
    console.log("D")
} else if (nota >= 50 && nota < 60){
    console.log("E")
} else if (nota >= 0 && nota < 50){
    console.log("F")
} else {
    console.log("nota inválida")
}

//Exercício 8

let a = 7;
let b = 10;
let c = 5;

if ((a % 2 == 0) || (b % 2 == 0) || (c % 2 == 0)) {
    console.log(true)
} else {
    console.log(false)
}

//Exercício 9

let a = 2;
let b = 10;
let c = 6;

let impar = false;

if ((a % 2 != 0) || (b % 2 != 0) || (c % 2 != 0)) {
    impar = true;
};
console.log(impar);

//Exercício 10

let custo = 100;
let venda = 150;

if (custo != 0 && venda != 0) {
 lucro = venda - (custo * 1.2)
 console.log (lucro * 1000)
} else {
    console.log("valor inválido")
}

//Exercício 11

// até 1556.94 = 8%
// até 1903.98 = 9%
// até 2594.92 = 9% + 7.5% - 142.80
// até 2826.55 = 11% + 7.5% - 142.80
// até 3751.05 = 11% + 15% - 354.80
// até 4664.68 = 11% + 22.5% - 636.13
// até 5189.82 = 11% + 27.5% - 869.36
// acima de 5189.82 = 570.88 + 27.5% - 869.36

let salarioBruto = 1900

let descontoINSS1 = salarioBruto * 0.08
let descontoINSS2 = salarioBruto * 0.09
let descontoINSS3 = salarioBruto * 0.11
let descontoINSS4 = 570.88

if (salarioBruto < 1556.95) {
    salarioComDescontoINSS = salarioBruto - descontoINSS1
} else if (salarioBruto < 2594.93) {
    salarioComDescontoINSS = salarioBruto - descontoINSS2
} else if (salarioBruto < 5189.82) {
    salarioComDescontoINSS = salarioBruto - descontoINSS3
} else {
    salarioComDescontoINSS = salarioBruto - descontoINSS4
}

if (salarioComDescontoINSS < 1903.99) {
    DescontoIR = 0
} else if (salarioComDescontoINSS < 2826.66){
    DescontoIR = (salarioComDescontoINSS * 0.075) - 142.80
} else if (salarioComDescontoINSS < 3751.06) {
    DescontoIR = (salarioComDescontoINSS * 0.15) - 354.80
} else if (salarioComDescontoINSS < 4664.68) {
    DescontoIR = (salarioComDescontoINSS * 0.225) - 636.13
} else {
    DescontoIR = (salarioComDescontoINSS * 0.275) - 869.36
}

console.log(salarioLiquido = salarioComDescontoINSS - DescontoIR)

