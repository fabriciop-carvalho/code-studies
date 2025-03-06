// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total); // -> 35
/* 
5*2 = 10
10 / 2 = 5
10 + 5 + 20 = 35
*/

// Crie duas expressões que retornem NaN
var unit = 10 + 12 * "String";
console.log(unit);

var unit2 = "prhase" / 2;
console.log(unit2);

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var number5 = 5;
number5++;
console.log(number5);

// Como dividir o peso por 2?
/* 
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
*/

var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = (numero / 2) + unidade;
console.log(pesoPorDois);