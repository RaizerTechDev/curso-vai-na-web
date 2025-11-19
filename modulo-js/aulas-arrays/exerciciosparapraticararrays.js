// Instruções: Faça cada passo, na ordem:

//Você está desenvolvendo um pequeno sistema de lista modelos de caminhões. Abaixo está a lista inicial dos:
//                  0      1      2         3   
let caminhoes = ['Scania', 'Volvo', 'Mercedes', 'Iveco']

// // Adicione o modelo "Ford" ao final da lista.
// caminhoes.push('Ford')
// console.log('Adicionando modelo de caminhão ao fim da lista:', caminhoes )

// // output ['Scania', 'Volvo', 'Mercedes', 'Iveco', 'Ford']

// // Adicione o modelo "Volks" ao início da lista.
//  caminhoes.unshift('Volks')
// console.log('Adicionando modelo de caminhão ao inicio da lista:', caminhoes )

// // output: ['Volks', 'Scania', 'Volvo', 'Mercedes', 'Iveco', 'Ford']

// // Remova o ultimo modelo da lista.
// let removaUltimoModelo = caminhoes.pop()
//  console.log('Removendo o último modelo:', removaUltimoModelo)
//  // output: Ford

// console.log(caminhoes)
// //output: ['Volks', 'Scania', 'Volvo', 'Mercedes', 'Iveco']

// // Remova o primeiro modelo da lista.
// let removaPrimeiroModelo = caminhoes.shift()
// console.log('Removendo o primeiro modelo:', removaPrimeiroModelo)
// // output: Volks

//   console.log(caminhoes)
//  //output:['Scania', 'Volvo', 'Mercedes', 'Iveco']

// // Substitua o modelo "Mercedes" por "GMC".
// let subtituirModelo = caminhoes.splice(2, 1, 'GMC')
// console.log('Modelo de caminhão substituido:', subtituirModelo)
// // output: Mercedes

// console.log(caminhoes)
// // output: ['Scania', 'Volvo', 'GMC', 'Iveco']

// // Ordene os modelos em ordem alfabética.
// let modelosCaminhoes = caminhoes.sort()
// console.log('Modelos por ordem alfabetica:', modelosCaminhoes)

// // output: ['GMC', 'Iveco', 'Scania', 'Volvo']

// // Inverta a ordem dos modelos.
// let inverteOrdemDosModelos = caminhoes.reverse()
// console.log('Ordem invertida dos modelos:', inverteOrdemDosModelos)

// // output: ['Volvo', 'Scania', 'Iveco', 'GMC']

// Crie uma nova lista com apenas os 2 primeiros modelos da lista atual, sem modificar o array original.

let novaListaModelos = caminhoes.slice(0, 2  )
// mostrar o original
console.log(caminhoes) 
// ['Scania', 'Volvo', 'Mercedes', 'Iveco']

// Mostrar nova lista com os 2 modelos
console.log('Nova lista criada com os 2 modelos:', novaListaModelos)
// output: ['Scania', 'Volvo']





