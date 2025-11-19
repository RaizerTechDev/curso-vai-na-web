// 1. Verifique se um número é par ou ímpar

let numero = 5

if((numero & 1) === 0) {
  console.log(`O ${numero} é par!`)
} else {
  console.log(`O ${numero} é impar!`)
}

//  2. Classifique uma nota como A, B, C ou Reprovado

let nota = 7.5

if(nota >= 9) {
  console.log(`{nota} A`)
} else if(nota <= 8 && nota >= 6 ) {
  console.log(`{nota} B`)

} else if(nota <= 5   && nota >= 3 ) {
  console.log(`{nota} C`) 
} else {
  console.log(`{nota} Reprovado`) 
}

// 3. Verifique se um ano é bissexto


 
// 4 - Crie uma condição de nota escolar, se o aluno tirou
// uma nota maior ou igual a 5 é aprovado, caso contrario reprovado.

let notaEscolar = 2

if(notaEscolar >= 5){
  console.log("Aluno Aprovado" )

} else {
 console.log("Aluno Reprovado" )
}

  // 5 - crie uma condição composta com uma variável dia e a condição verifica
// se está de dia mostre 'claro' senão mostre está 'de noite'

let dia =  14 // 2 tarde

if(dia >= 6 && dia <= 18 ) {
console.log("É claro!")
} else {
console.log("É noite!")
}

// 6 Este exercicio está junto ao index.html crie uma condição com nome e senha e verifique se o acesso
// e negado ou liberado;

let nome = 'Rafael'
let senha = 'SenhaSegura123'

if(nome == 'Rafael' && senha =='SenhaSegura123') {
  console.log('Liberado!')
} else {
   console.log('Negado')
}

// 7  Crie 3 variaveis, dinheiroConta, salario e custoViagem, verifique de acordo
//com seu orçamento se e possivel fazer uma viagem.

let dinheiroConta = 10000 // (dinheiro que você já tem guardado)
let salario = 3000 //(a receber)
let custoViagem = 7500 // despesa

// Operação
let orcamentoTotal  = dinheiroConta + salario  // todo dinheiro disponível 

//Condicional
if(orcamentoTotal >= custoViagem) {
  console.log(`Posso viajar, R$ ${dinheiroConta} + R$ ${salario} = R$ ${orcamentoTotal}, está no orçamento, é maior que: ${custoViagem} `)

} else {
  console.log(`Não posso viajar, ${dinheiroConta} + ${salario} =  ${orcamentoTotal}, esta fora do meu orçamento, pois é menor que: ${custoViagem}`)
}


// 8. Descubra o maior entre três números está junto ao (index.html), usa Dom

let number1 = 5
let number2 =12
let number3 = 25

let maiorNumero

if(number1 >= number2 && number1 >= number3) {
  maiorNumero = number1
} else if(number2 >= number1 && number2 >= number3) {
  maiorNumero = number2
} else if (number3 >= number1 && number3 >= number2) {
  maiorNumero = number3
}
  console.log(`O maior numero é: ${maiorNumero}`)
  document.getElementById("maiorNumero").textContent = `Maior Número é: ${maiorNumero}`


