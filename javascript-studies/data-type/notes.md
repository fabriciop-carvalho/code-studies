### Tipos de dados
Todos são primitivos, exceto os objetos.

```js
var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object
```

> primitivos são dados imutáveis

```js
var UserName = "André";
console.log(typeof UserName); // -> string

var age = 24;
console.log(typeof age); // -> number

var team;
console.log(typeof team); // -> undefined (doesn't have a value defined)

team = null;
console.log(typeof team); // -> object

var symbol = Symbol();
console.log(typeof symbol); // -> symbol
```

### Strings
É possível somar strings e, assim, concatenar palavras

```js
var firstName = "Fabrício";
var lastName = "Carvalho";
var completeName = firstName + lastName;

console.log(typeof completeName); // -> FabrícioCarvalho
```
Repare que assim não existe espaçamento entre as palavras.<br/>
Para fazê-lo, precisaríamos de algo como:

```js
var firstName = "Fabrício ";
var lastName = "Carvalho";
var completeName = firstName + lastName;

console.log(typeof completeName); // -> Fabrício Carvalho
```
Ou então

```js
var firstName = "Fabrício";
var lastName = "Carvalho";
var completeName = firstName + " " + lastName;

console.log(typeof completeName); // -> Fabrício Carvalho
```

Também é possível somar números com strings

```js
var points = 1000;
var phrase = 'Carlos did ' + points + ' points in that game';
console.log(phrase); // -> Carlos did 1000 points in that game
console.log(typeof phrase); // -> string 
```

Um ponto interessante, é que sempre que somamos uma `string` com um `number`, o resultado final será uma string;

```js
var year = "2025";
var month = 3; 
console.log(year + month); // -> 20253
```

#### Aspas duplas, simples e template string
```js
'JavaScript é "super" fácil'; ✅
"JavaScript é 'super' fácil"; ✅
"JavaScript é \"super\" fácil"; ✅
`JavaScript é "super" fácil"`; ✅ 
"JavaScript é "super" fácil"; ⛔
```

> Não precisamos, necessariamente, atribuir valores a uma variável

#### Templaste strings

```js
var points = 1000;
var phrase1 = 'Carlos did ' + points + ' points in that game';
var phrase2 = `Carlos did ${points} points in that game`; // -> Utilizando template strings
```

Nesse caso, passamos expressões ou variáveis dentro de `${}`

[🔗 Exercício](data-type.js)