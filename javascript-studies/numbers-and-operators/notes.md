### Números
```js
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
```
> precisão para até 15 dígitos

### operadores Aritméticos
```js
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
```
> Lembrando que usa-se soma `+` em strings para concatenar

#### Operadores em strings

```js
var soma = '100' + 50; // 10050 (string)

var subtracao = '100' - 50; // 50 (Não tem como subtrair uma string, e por isso ele tenta converter a string para número)

var multiplicacao = '100' * '2'; // 200 (string convertida para número, por isso funcionou)

var divisao = 'Comprei 10' / 2; // NaN (Not a Number) - Ele não consegue converter a string "comprei" por isso retorna NaN
```
> É possível verificar se uma variável é `NaN` ou não com a função `isNaN()`;
---
> Sempre que você soma com uma string, você está concatenando;

#### NaN = Not a number
```js
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)
```

### A ordem importa
Começa por multiplicação e divisão, depois por soma e subtração

```js
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
```

> Parênteses para priorizar uma expressão

```js
var soma1 = 10 + 10 + 20 + 30 * 4  / 2 + 10;
console.log(soma1) // -> 110
/* 
30 * 4 = 120
120 / 2 = 60
(depois faz a adição normal)
10 + 10 + 20 + 60 + 10 = 110
*/ 
```

Toda a lógica de como essas operações funciona segue o mesmo princípio da matemática básica. Ou seja, se eu tivesse uma expressão onde há uma operação entre parênteses, ela teria prioridade acima das outras operações

```js
var soma1 = 10 + 10 + 20 + 30 * 4  / (2 + 10);
console.log(soma1) // -> 50
/* 
Priorizamos a operação entre parênteses:
(2+10) = 12
Depois seguimos com a conta:
30 * 4 = 120
120 / 12 = 10
10 + 10 + 20 + 10 = 50
*/ 
```

### Operadores Aritméticos Unários
```js
var increase = 5;
console.log(increase++); // 5
console.log(increase); // 6

var inscrease2 = 5;
console.log(++increase2); // 6
console.log(increase2); // 6
```
> decremento pode ser feito através de `--`

Os sinais `+` e `-` tentam transformar o valor seguinte em um número:
```js
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
``` 

[🔗 Guia completo de operadores - Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)

[🔗 Exercício](numbers-n-operators.js)