### Boolean
Existem apenas dois valores booleanos:
`false` ou `true`.

```js
var hasUniversity = true;
var hasMba = false; 
```

### Condicionais If e ELSE
Verificar se uma espressão é verdadeira com `if` , caso contrário o `else` será ativado

```js
var hasUniversity = true;

if(hasUniversity) {
    console.log('Possui graduação')
} else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else
```

> O valor dentro dos parênteses será avaliado em `false` ou `true`.

### Condicionais Else If
Se o `if` não for verdadeiro, ele testa o `else if`

```js
var hasUniversity = true;
var hasMba = false;

if(hasMba) {
  console.log('Possui graduação e doutorado');
} else if(hasUniversity) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado
```

#### Truthy e Falsy

Existem valores que retornam `true` e outros que retornam `false` quando verificado em uma expressão booleana.

```js
// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``
```
> Todo o resto é `truthy`

```js
// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})
```

### Operador lógico de negação !
O operador `!` nega uma operação booleana. ou seja, `!true` é igual a `false`

```js
// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
```
> Dica: você pode utilizart o `!!` para verificar se uma expressão é `truthy` ou `falsy`

### Operadores de comparação
Vão sempre retornar um valor booleano

```js
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false
```

O `==` faz uma comparação não tão estritra e o `===` faz uma comparação estritra, ou seja, o **tipo de dado** deve ser o mesmo quando usamos `===`

```js
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true
```
### Operador lógico &&

`&&`compara se uma expressão **e** a outra é verdadeira

```js
true && true;// true
true && false;// false
false && true;// false
'Gato' && 'Cão';// 'Cão'
(5 - 5) && (5 + 5);// 0
'Gato' && false;// false
(5 >= 5) && (3 < 6);// true
```
> Se ambos os valores forem true ele irá **retornar o último valor** verificado. Se algum valor for false, irá retornar o mesmo e não irá continuar a verificação do próximo

### Operador lógico ||
O operador lógico `||` compara se uma expressão **ou** outra é verdadeira

```js
true || true;// true
true || false;// true
false || true;// true
'Gato' || 'Cão';// 'Gato'
(5 - 5) || (5 + 5);// 10
'Gato' || false;// Gato
(5 >= 5) || (3 < 6);// true
```
> Retorna o **primeiro** valor true que encontrar

### Switch
Com o `switch` podemos verificar se uma variável é igual à valores diferentes utilizando o `case`. Caso ela seja igual, podemo fazer alguma coisa e então usar a palavra chave `break;` para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

```js
var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;

  default:
    console.log('Feche os olhos');
}
```
[🔗 Exercício](boolean-n-conditionals.js)
