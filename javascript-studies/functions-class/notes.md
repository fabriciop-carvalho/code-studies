#### Funções
Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor

```js
function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4
```
</br>

---

</br>

```js
function pi() {
    return 3.14;
}

var total = 5 * pi(); // 15.7
```
> Parênteses `()` executam uma função

### Parâmetro e Argumentos
Ao `criar` uma função, você pode definir `parâmetros`.</br>
Ao `executar` uma função, você pode passar `argumentos`

```js
// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos
```

> Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum.

#### Parênteses executam a função

```js
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
corFavorita(); // retorna 'Você não gosta de nada'
```
> Se apenas definirmos a função com o *function* e não executarmos a mesma, nada que estiver dentro dela irá acontecer;

#### Argumentos podem ser funções
Chamadas de `Callback`, geralmente são funções que occorrem após algum evento.

```js
addEventListener('click', function() {
    console.log('Clicou')
});
// A função possui dois argumentos
// Primeiro é  astring 'click'
// Segundo é uma função anônima
```

> Funções anônimas são aquelas em que o nome da função não é definido, escritas como `function() {}` ou `() => {}`

#### Pode ou não retornar um valor
Quando não definimos o *return*, ela irá retornar `undefined`. O código interno da função é executado normalmente, independe de existir valor de *return* ou não.

```js
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined
```

#### Valores retornados
Uma função pode retornar qualquer tipo de dado e até outras funções.

```js
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false
  }
}
```
> Cuidado: Retornar diferentes tipos de dados na mesma função não é uma boa ideia.
> Ou seja, esse exemplo acima é **apenas** um exemplo

### Escopo
Variáveis e funções definidas dentro de um blco `{}` não são visíveis fora dele

```js
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPAises - paisesVisitados} países`;
}
console.log(totalPaises); // erro, totalPaises não definido
```

#### Escopo léxico
Funções conseguem acessar variáveis que foram criadas no contexto `pai`

```js
var profissao = 'Designer';

funcion dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro'
    var idade = 29;
    retunr `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // Retorna um erro
```

### Hoisting
Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

```js
imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
```

[🔗 Exercício](functions.js)