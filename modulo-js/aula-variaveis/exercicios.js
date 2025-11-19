// 1. Crie uma variável que armazene seu nome e exiba no console.
let nome = "Rafa"
console.log(`${nome}`)

// 2. Crie uma variável para sua idade e exiba uma frase no console usando nome e idade.

let idade = 49
console.log(`- Meu nome: ${nome} e minha idade: ${idade}`)

// 3. Crie uma variável com sua cor favorita e depois mude o valor para outra cor.

let cor = 'azul';
console.log(`- Minha cor favorita: ${cor}`)
 cor = 'verde'
console.log(`- Mudando a cor que agora é: ${cor}`)

// 4. Crie uma variável com um número, depois crie outra variável somando esse número com 10 e exiba o 
// resultado.
let numero = 4
let somaTotal = numero + 10

console.log(`O resultado da soma do numero: ${numero} + 10 = ${somaTotal}`)

//5. Crie duas variáveis com números diferentes, troque os valores entre elas e exiba o resultado no console.

let number1 =3
let number2 = 8

// Antes da troca
console.log(`- Resultado antes da troca: \n • number1: ${number1} \n • number2: ${number2} `)

// Troca de valores 
let tValores = number1 //criar variavel para number 1 para troca

number1 = number2 // number 1 tem de ser igual number2 para trocar de 3 para 8 

number2 = tValores // aqui number2 fica igual a varivel da tValores para trocar o numero de 8 para 3

console.log(`- Resultado após a troca de valores: \n • number1: ${number1} \n • number2: ${number2} `)

// 6. Crie três variáveis com tipos diferentes de dados: um número, um texto e um valor booleano.
// let numero1 = 5              //variável 1
// let texto = 'Buenas turma!' // variável 2
// let booleano = true         // variável 3

// console.log(`- A variável 1 é: ${numero1}, \n- A variável 2 é: ${texto}, \n- A variável 3 é: ${booleano}`)

// 6.  Use o comando typeof para exibir o tipo de cada uma das variáveis criadas no exercício anterior.

 console.log('- A variável 1 é do tipo:', typeof 5, '\n- A variável 2 é do tipo:' , typeof 'Buenas, turma!', '\n A variável 3 é do tipo:', typeof true)

// 7. Crie uma constante com sua cidade natal e tente mudar o valor dela (observe o que acontece).
// const cidadeNatal = 'Lages'
// console.log(`- Minha cidade natal: ${cidadeNatal}`)

// cidadeNatal = 'Gaspar'
// console.log(`- Mudando a minha cidade natal: ${cidadeNatal}`) // Dá erro porque o valor não pode ser alterado. Ele é imutável.
