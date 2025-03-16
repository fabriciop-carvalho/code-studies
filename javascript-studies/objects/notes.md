### Objetos
Conjunto de variáveis e funções, que são chamadas de proriedades e métodos

```js
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true
```
> Propriedades e métodos consistem em nome (chave) e valor

- No caso acima, `pessoa` é um objeto
- `nome`, `idade`, `profissao`, `possuieFaculdade` são os valores

### Métodos
É uma propriedade que possui uma função no local do seu valor

```js
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20
```

Abreviação de `area: function() {}` para `area() {}`, no ES6+

### Organizar o código
Objetos servem para organizar o código em pequenas partes reutilizáveis

```js
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14
```
> `math` é um objeto nativo de Javascript. Já percebeu que `console` é um objeto e `log()` um método?

### Criar um objeto
Um objeto é criado com as chaves `{}`

```js
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'
```

### Dot Notation Get
Acesse propriedades de um objketo utilizando o `.`

```js
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'
```
### Dot Notation Set
Substitua o valor de uma propriedade utilizando `.` e o `=` após o nome da mesma.

```js
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'
```

### Adicionar Propriedades e Métodos
Basta adicionar um novo nome e definir o valor

```js
var menu = {
    width: 800,
}

menu.height = 50;
menu.position = 'fixed';
```

### Palavra-chaves `this`
`this` irá fazer uma referência ao próprio objeto

```js
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60
```

> `this` irá retornar o próprio objeto

### Protóripo e Herança
O objeto herda propriedades e métodos que foram utilizadas para criar o mesmo

```js
var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
```
> **hasOwnProperty** é um método de Object

--- 

### Tudo é um objeto
Strings, números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos

```js
var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'
```
> Uma string herda propriedades e métodos do construtor `String()`

 #### Números

```js
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'
```

 > Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso asim as suas propriedades e métodos

#### Funções

```js
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1
```

### Elementos do DOM
```js
<a class="btn">Clique</a>
```

```js
var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})
```

> Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.


> # Objetos revolucionaram a programação
> Web API's são métodos e propriedades que permitem a interação JavaScript e Browser


[🔗 Exercício](objects.js)