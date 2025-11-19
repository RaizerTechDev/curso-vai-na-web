// let cameraAberta = 'Karina'

// cameraAberta = 'Igor'
// // console.log(cameraAberta)

// const CPF = 555555555555

// // CPF = 11111111111
// // console.log(CPF)

// //  Tipos de Dados

// // String
// // number
// //  boolean
// // null
// // NaN
// // undefined

// let nome = 'Vini'
// let premio = "Computador"
//  let qtd = 1 // vem 'number' ao invés de string

// // console.log(typeof(qtd))


// console.log(`${nome} vai sortear ${qtd} ${premio}!`)

//  Operadores de comparação ou relacionais

// >
// <
 // >=
// <=

//  Maior que >
7 > 3 // true

// Menor que >
2 < 4 //→ true


// Maior ou igual >=
5 >= 5  // true

// Menor ou igual <=
3 <= 2 // false

// = Igual 

// == Igual (só valor) true 

// === Igual (valor e tipo) false se tiver string, só numero true

// != Diferente (só valor)

// !== Diferente (valor e tipo) true se tiver string, só numero false

==

// Igual (só valor) =
5 == "5" // true

// Igual (valor e tipo) ===  tem string false, somente numero true
5 === "5" //false 

// Diferente (só valor) !=
5 != "5" // false

// Diferente (valor e tipo) !==
5 !== "5" // true


 let num1 = 2;
 let num2 = '2';

 console.log(num1 == '2')

// Igual (só valor)
// console.log(num1 === 2) // true sem string
 console.log(num1 === '2') // false tem string

 // Diferente (só valor)
console.log(num1 != num2) // false

// Diferente (valor e tipo)
 console.log(num1 !== num2) // true tem string
 console.log(num1 !== num1) // false sem string


//   Operadores Lógicos
//   && (and) 
//  || (or) 
// //  ! (not)

// console.log(true && false)
 // console.log(true && true)
 // console.log(true && false)

 // console.log(false || true)
 // console.log(false || false)
 // console.log(true || true)

// console.log(!3 > 2)

//  Condicionais
// # **1. if – SE**

// **Se a condição for verdadeira, o código é executado.**

// let idade = 18;

// if (idade >= 18) {
//   console.log("Você é maior de idade");
// }
// ```

// **Dica para explicar:**
// “Imagine uma porta que só abre se a pessoa tiver 18 anos ou mais. O if é essa porta.”

// # **2. else – SENÃO**

// **Se a condição for falsa, executa outra coisa.**


let idade = 16;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// **Dica em aula:**
// Faça os alunos trocarem o valor da variável e verem o que muda no resultado.

// # **3. else if – SENÃO SE**

// **Permite testar várias condições diferentes.**


//let nota = 90;
 //let nota = 75;
//let nota = 43;
 let nota = 25;

if (nota >= 90) {
  console.log("Aprovado");
} else if (nota >= 51 && nota <= 89) {
  console.log("Está na média");
} else if (nota  >=41 && nota <=50) {
  console.log("Quase não passa");
} else {
  console.log("Reprovado");
}


// **Dica prática:**
// Use diferentes notas para ver as saídas mudando ao vivo.

// let cameraAberta1 = true

// if (cameraAberta1) {
//   console.log("Vini vai te dar um Comptador")
// } else {
//   console.log("Vini não vai te dar um Comptador")
// }

// let CNH  = true
// let idade = 20

//  if ( CNH && idade >= 18) {
// console.log('Você pode dirigir!')
// } else {
//   console.log('Você não pode dirigir!')
// }

//   Condicional Ternária
//  condicao ? true - executa : false - outro codigo
// let idade1 = 15 
// let mensagem = idade1 >= 18 ? 'Pode comprar bebidas' : 'Você não pode comprar bebida'
// console.log(mensagem)

const resultado = document.querySelector("#resultado")

const nome = prompt("Digite seu Nome:")
const idade2 = Number(prompt("Digite sua Idade:"))

if (nome === "" || isNaN(idade)) {
  resultado.textContent = "Preencha os dados corretamente"
resultado.style.background = 'red'
  
} else if ( idade < 12) {
  resultado.textContent = `Usuario: ${nome} - Status: criança `
  resultado.style.background = 'blue'

} else if ( idade < 18) {
  resultado.textContent = `Usuario: ${nome} - Status: adolescente`
   resultado.style.background = 'yellow'
} else {
  resultado.textContent = `Usuário: ${nome} - Status: adulto`
     resultado.style.background = 'lightgreen'
}