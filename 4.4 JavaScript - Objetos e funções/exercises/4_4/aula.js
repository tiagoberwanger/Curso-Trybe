//Aula 4.4 JavaScript - Objetos e funções

//Como criar uma função de soma

function soma (valor1, valor2) {
    soma = valor1 + valor2;
    return soma;
}

//Como criar uma função de subtração

function soma (valor1, valor2) {
    return valor1 - valor2;
}

//Função que retorna o menor valor

function menorValor (valor1, valor2) {
    if (valor1 < valor2) {
        return "menor";
    } else if (valor1 === valor2) {
        return "igual"
    } else {
        return "maior"
    }
}

//Objetos

let pessoa = {
    nome: "Tiago",
    idade: 30,
    cidade: "Itapiranga",
};

console.log(pessoa);

//Comando "for in" = acessa as propriedades de um objeto ou o índice de um array

for(let propriedade in pessoa) {
    console.log( "chave: " + propriedade)
    console.log( "valor: " + pessoa[propriedade])
}
