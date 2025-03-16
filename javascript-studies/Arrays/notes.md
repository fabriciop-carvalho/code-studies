### Arrays
É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

```js
var videoGames = ['Switch', 'PS4', 'Xbox']; 
videoGames[0] // Switch
videoGames[0] // Xbox
```
> Acesse um elemento da array util;izando `[n]`

### Métodos e propriedades de uma Array

```js
var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames.pop(); // **Remove** o último item e o retorna;
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.lenght; // 3
```

> Existem diversos outros métodos, como `map`, `reduce`, `forEach` e mais que veremos mais à frente.

### For Loop
Fazem algo repetidamente até que uma condição seja atingiga

```js
for (var numero = 0; numero < 10; numero++) {
    console.log(numero)
}
// retorna de 0 a 9 no console
```

> O **for loop** possui 3 partes, `início`, `condição` e `incremento`

### While Loop
```js 
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console
```

> O `For Loop` é mais comum

### Arrays e Loops

```js
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

/* 
Swicth
PS4
Xbox
3DS
*/
```


### Break
O loop irá parar caso encontre a palavra `break`

```js
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}
```

### forEach
forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

```js
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
```

> Podemos passsar os seguintes parâmetros `item`, `index` e `array`

### Não se confunda com a sintaxe
```js
var numero = 0;
var maximo = 50;
for (;numero < maximo;) {
    console.log(numero);
    numero++;
}
```

> Não é aconselhável escrever da forma acima, mas funciona normalmente

[🔗 Exercício](arrays.js)