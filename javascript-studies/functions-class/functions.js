// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
    return !!value;
};

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
    return lado * 4;
};

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function myName(firstName, lastName) {
    return `Seu nome é ${firstName} ${lastName}`;
};

// Crie uma função que verifica se um número é par
function isEven(number) {
    if(number % 2 == 0) {
        return "É par"
    } else {
        return "É ímpar";
    }
};

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function dataType(argument) {
    return typeof argument;
}



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener("click", function() {
    console.log('Fabrício Carvalho');
});

// Corrija o erro abaixo
/*
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
*/

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);