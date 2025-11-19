//                               0         1            2      3

// let alunosComCamera = ['Karina', 'Gabriela', 'Pedro', 'Igor']
// console.log(alunosComCamera)
// console.log(alunosComCamera[2]) // Sai o array 2 = Pedro

// alunosComCamera[2] = 'Rafa'
// console.log(alunosComCamera) // Rafa no lugar do Pedro

// //Métodos
// // unshift -> Adiciona um valor no inicio  dos outros valores no array
// alunosComCamera.unshift 
// console.log(alunosComCamera)

// // push -> Adiciona um novo elemento ao fim do array
// alunosComCamera.push('Adevalter') 
// console.log(alunosComCamera)

// // Para remover o 1ª Nome
// // shift
// alunosComCamera.shift()
// console.log(alunosComCamera)

//  // Para remover o ultimo nome
//  // shift
// alunosComCamera.pop()
// console.log(alunosComCamera)

// //colocando o array em ordem
// alunosComCamera.sort()
// console.log(alunosComCamera);

//--------
//colocando o array em ordem
let numeros = [5, 3, 8, 10, 20, 50, 6, 4, 9, 7, 1, ]

// retornando com a -> menor para o b ->maior 
numeros.sort(function(a, b){
  return a - b
})
console.log(numeros)
//                          0       1           2       3       4       5
let alunosComCamera = ['Karina', 'Gabriela', 'Pedro', 'Igor', 'Vini', 'Jef']
console.log(alunosComCamera)
// splice (adicionar, substituir, remover)
// array: splice(index, delete, elemento)

// Adicionando elemento
//                          0       1           2       3         4       5     6
// let alunosComCamera = ['Karina', Rafael 'Gabriela', 'Pedro', 'Igor''Vini', 'Jef']
alunosComCamera.splice(1, 0,'Rafael') // Adcionando com indice 0 o Rafael
console.log(alunosComCamera)

// Removendo elementos
alunosComCamera.splice(2, 2) //O indice 1ª = 2  Remove o elemento 2 = Gabriela. O 2º indice = 2 é pra remover o elemento 2 do 1º indice + o elemento 3 = Gabriela e Pedro
console.log(alunosComCamera)

// Substituindo um elemento
alunosComCamera.splice(1, 3, 'Drissa') // O indice 1ª = 1  substitui o elemento 1 que é o Rafael para Drissa e o indice 2º = 3 substitui o elementoa 1 do indice 1o = Rafael e os elementos 4 = Igor e o 5 = Vini 
// totalizando os 3 do indice 2º. O elemento 6 = Jef ficou porque eram 3 do indice 2º 
console.log(alunosComCamera)

//slice
// o elemento do inicio sera sempre incluido // 1
// o elemento final não será incluido        // 4   
// ouput: Teclado, 'Mackbook Pro', 'Ipad'
//                    0       1         2               3         4       5    
let produtos = ['Mouse', 'Teclado', 'Mackbook Pro', 'Ipad', 'Iphone', 'Headset']
let meusProdutos = produtos.slice(1, 4)
console.log(meusProdutos)

// Cria um novo elemento li (item de lista) para cada número
const listaProdutos = document.querySelector('#listaDeProdutos')

// Repetiçao do laço com for e incrementar com i++
for (let i = 0; i < produtos.length; i++) {
   // Cria um novo elemento li (item de lista) para cada produto
  const li = document.createElement('li')
   // Define o texto do li como o número atual do array
  li.textContent = produtos[i]
    // Adiciona o elemento li criado à lista no HTML
  listaProdutos.appendChild(li)

}

// Numeros pares e impares com condicionais e incrementação com index.html

// Seleciona o elemento ul do HTML onde serão inseridos os números
let listaPares = document.querySelector('#listaPares')

// Array contendo os números que serão analisados
let numeros1 = [2,  5,  8, 11, 14, 19, 22]

// Variável de controle para o loop while
let i = 0

// Loop while que percorre todos os elementos do array
while (i < numeros1.length){

   // Cria um novo elemento li (item de lista) para cada número
  const li = document.createElement('li')

    // Define o texto do li como o número atual do array
  li.textContent = numeros1[i]

    // Verifica se o número é par (resto da divisão por 2 é igual a 0)
  if (numeros1[i] % 2 === 0) {

    // Se for par, aplica cor verde ao texto  e adiciona o elementoa  lista HTML
  li.style.color = 'green' 
      li.textContent += ' (Par)'

 // Senao, é impar e aplica cor vermelha ao texto e adiciona o elementoa  lista HTML
} else {
  li.style.color = 'red'
   li.textContent += ' (Ímpar)'
}
    // Adiciona o elemento li criado à lista no HTML
  listaPares.appendChild(li)
  i++
}