// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var userData = {
    firstName: 'Fabrício',
    lastName: 'Carvalho',
    age: 24,
    city: 'São José dos Campos',

}
// Crie um método no objeto anterior, que mostre o seu nome completo

userData.fullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 3000;
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var dog = {
    breed: 'Labrador',
    color: 'Preto',
    age: 10,
    saw(dogSaw) {
        if(dogSaw === 'Homem' || 'homem') {
            return 'Au Au Au';
        } else {
            return 'O cachorro quer carinho 🐶';
        } 
    },
  }

  dog.saw('Homem') // 'Au Au Au'
  

// nomeie 3 propriedades ou métodos de strings
var nome = 'Fabrício';
nome.startsWith
nome.toLowerCase
nome.toUpperCase

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn')
btn.addEventListener
btn.appendChild
btn.animate
btn.cloneNode
btn.before