 //                    0                  1                 2  
let tarefas = ["Estudar JavaScript", "Ler um livro", "Fazer exercícios"];

// // Adicione a tarefa "Arrumar o quarto" ao final da lista.
 tarefas.push("Arrumar Quarto")
 console.log('Adiona ao fim:', tarefas);


// // Adicione a tarefa "Tomar café da manhã" ao início da lista.
 tarefas.unshift('Tomar Café da Manhã')
 console.log('Adiciona ao inicio',tarefas);

 // output            0             1                    2                3                4
// ['Tomar Café da Manhã', 'Estudar JavaScript', 'Ler um livro', 'Fazer exercícios', 'Arrumar Quarto']

// Remova a última tarefa da lista.
let ultimaTarefa = tarefas.pop()
console.log('Remover a ultima tarefa:', ultimaTarefa)
 console.log(tarefas)
 
// Remova a primeira tarefa da lista.
 let primeiraTarefa =  tarefas.shift()
 console.log('Remover a primeira tarefa:', primeiraTarefa)
console.log(tarefas)

//  // output        0                  1                    2                3
// //        'Estudar JavaScript', 'Ler um livro', 'Fazer exercícios', 'Arrumar Quarto']

// // Substitua a tarefa "Fazer exercícios" por "Fazer caminhada".
// let substituirTarefa = tarefas.splice(2, 1, 'Fazer caminhada')
// console.log('Substituir a tarefa:', substituirTarefa)
// console.log(tarefas)
// // output         0                     1         substituição 2            3
// //        ['Estudar JavaScript', 'Ler um livro', 'Fazer caminhada', 'Arrumar Quarto']

// // Ordene as tarefas em ordem alfabética.
let ordemAlfabetica = tarefas.sort()
 console.log('Tarefas em ordem alfabetica:', tarefas)

// // output        0                  1                    2               3
// //        ['Arrumar Quarto', 'Estudar JavaScript', 'Fazer caminhada', 'Ler um livro']

// // Inverta a ordem da lista atual.
// let inverteOrdemTarefas = tarefas.reverse()
// console.log('Tarefas com a ordem invertida:', tarefas)

// output          0                 1                    2               3
//         ['Ler um livro', 'Fazer caminhada', 'Estudar JavaScript', 'Arrumar Quarto']

// Crie uma nova lista com apenas as duas primeiras tarefas da lista atual, sem modificar o array original.
 //                    0                  1                 2  
// let tarefas = ["Estudar JavaScript", "Ler um livro", "Fazer exercícios"];
 let criarNovaLista = tarefas.slice(0, 2)
 console.log(tarefas)
console.log('Nova lista de tarefas criada:',criarNovaLista)