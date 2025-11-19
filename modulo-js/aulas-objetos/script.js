 //           0      1        2          3      4        5  
let nomes = ['Vini', 'Gabi', 'Karina', 'Rafa', 'Niedja', 'Arthur']
console.log(nomes)

// nomes.push('Thiago')
// console.log(nomes)

// nomes.unshift('José')
// console.log(nomes)

// nomes.pop()
// console.log(nomes)

// nomes.shift()
// console.log(nomes)

nomes.splice(1, 1)
console.log(nomes)

// let numeros = [9, 7, 1, 6, 10, 8]
//  numeros.sort(function(a, b){
//   return a - b

// })
// console.log(numeros)

// Objetos = Classificar os elementos

// let pessoas = [ 
//     {
//     nome: 'Rafa',
//     idade: 49,
//     profissão: 'Dev',
//     endereço: {
//       rua: 'avenida brasil',
//       numero: 2,
//     }
//   },

//   {
//     nome: 'Thiago',
//     idade: 25,
//     profissão: 'Dev'
//   }
// ]

// console.log(pessoas)

// let alunos = 
//   {
//   nome: 'Pedro',
//   idade: 28,
//   nota: [8.5, 9.0, 5.5]
//   }
// console.log(alunos.idade)
// console.log(alunos.nota[0])

// array sistema de produtos
const produtos = [
  {
    nome: 'Notebook',
    preco: 4500,
  },

   {
    nome: 'Mouse',
    preco: 80,
  },


   {
    nome: 'Teclado',
    preco: 120,
  },

   {
    nome: 'Monitor',
    preco: 900,
  },

]

//dom
const container = document.querySelector('#produtos')

// Precorrer o array
for(let i = 0; i < produtos.length; i++) {
  const item = produtos[i] // guarda informacoes com a variavel item

  // Criação card com div
  const card = document.createElement('div')
  card.classList.add('card')

  // criar um elemento html com card com item e a lista
  card.innerHTML = `
  <h3>'Nome do Produto: ' ${item.nome}</h3>
  <p>'Preço do Produto: '${item.preco}</p> 
  `;

  container.appendChild(card)
}

