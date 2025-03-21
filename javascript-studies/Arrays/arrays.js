// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var worldCupYears = [1959, 1962, 1970, 1994, 2002];


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

worldCupYears.forEach(function(item) {
    console.log(`O brasil ganhou a copa de ${item}`)
});


/* ========================================================

Outra forma para eu resolver isso, seria usando for Loop:

for (var i = 0; i < worldCupYears.length; i++) {
     console.log(`O Brasil ganhou a copa de ${worldCupYears[i]}`);
 } 

======================================================== */


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if(frutas[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var lastFruit = frutas[frutas.length -1];
console.log(lastFruit)