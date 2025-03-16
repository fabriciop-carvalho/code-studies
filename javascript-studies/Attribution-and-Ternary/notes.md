### Operadores de atribuição
Podem funcionar como formas abreviadas

```js
var x = 5;
var y = 10;

x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)
```
### Operador ternários
Abreviação de condicionais com `if` e `else`

```js
var idade = 19;
var podeBeber = (idade >= 18) ? 'pode beber' : 'Não Pode beber';
console.log(podeBeber) // Pode beber

//condição ? true : false
```

> Geralmente utilizado quando precisamos atribuir valor apra uma variável, dependendo de uma condição

### If abreviado
Não é encessário abrir e fechar as chaves `{ }` quando retornamos apenas uma linha de código

```js
var possuifaculdade = true;
if(possuiFaculdade) console.log ('Possui faculdade');
else console.log ('Não possui faculdade');

// ou

if(possuiFaculdade)
    console.log('Possui faculdade');
else
    console.log('Não possui faculdade');
```
[🔗 Exercício](exercises.js)