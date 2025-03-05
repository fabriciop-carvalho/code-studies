### Variáveis
- Variáveis são responsáveis por guardar dados na memória.
- Em Javascript temos as variáveis `var`, `let`, e `const` 
	- O que muda entre elas é apenas uma questão de escopo

```js
var name = 'andré;
var age = 18;
var hasUniversity = true;

console.log(name, age, hasUniversity) // -> andré, 18, true
```

- Portanto, variáveis também servem para evitar repetição, o que é faz parte do conceito de código DRY (Don't Repeat Yourself)

```js
var price = 25;
var totalItems = 5;
var totalPrice = price * totalItems;

console.log(totalPrice); // -> 125
```

- Também é possível definir várias variáveis dentro da mesma sintaxe

```js
var name = 'Rafael', 
	city = Rio;

console.log(name, city); // -> Rafael, Rio
```

- Variáveis sem valor

```js
var noValue;

console.log(noValue); // -> undefined
```


### Nomes
- Os nomes podem iniciar com $, _ , ou letras.
	- Podem conter números, mas não inciar com eles
- Case sensitive
	- "nome" é diferente de "Nome"
- [Não devem utilizar palavras reservadas](https://www.w3schools.com/js/js_reserved.asp)
- Existem alguns padrões para formatar o nome:
	- camelCase
	- snake_case
	- kebab-case
	- PascalCase

#### Exemplos de nomes

```js
// Inválido
var §nome;
var function;
var 1possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;
```

### Hoisting
São movidas para cima do código, porém o valor atribuído não é movido

```js
// var food; A variável sobe, mas seu valor continua na mesma posição
console.log(food); // -> undefined
var food = 'pizza';
console.log(food); // -> pizza
```

### Mudar valor atribuído
É possível mudar os valores atribuídos a variáveis declaradas com `var` e `let` . Porém, não é possível modificar valores das declaradas com `const` 

```js
var age = 28;
age = 29; 

console.log(age); // -> 29

let price = 50;
price = 25; 

console.log(price); // -> 25

const hasUniversity = true; 
hasUniversity = false;

console.log(hasUniversity); // error
```
