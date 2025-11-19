// let nota = 5

// if(nota >= 7 && nota <= 10) {
//   console.log("Aprovado")
// } else if(nota <=6 && nota >=4) {
//   console.log("Na média")
// } else {
//   console.log("Reprovado")
// }

// Condicionais Switch

// let diaDeAula = Number(prompt("Digite um numero de 1 a 4:"))

// switch(diaDeAula){
//   case 1:
//     console.log('Segunda-Feira')
//     break   

//     case 2:
//     console.log('Quarta-Feira')
//     break

//     case 3:
//     console.log('Quinta-Feira')
//     break

//     case 4:
//     console.log('Sexta-Feira')
//     break
//     default:
//     console.log("Número Inválido")
// }

//Loops (FOR | WHILE | DO WHILE)

// for
// i++ = Incremento = Contagem
// i++ = Incremento

// for Incremento
// for(let i= 0; i <= 5; i++){
// console.log(`${i} -'Rafa'`)
// }

// // for Decremento
// for(let r= 20; r >= 0; r-= 2){
//   console.log(`----- ${r} -'Rafa'`)
//  }

// //while
// let num =  1
// while(num <=5){
//   console.log("Boa")
// num++
// }

// // do while
// let numero = 1

// do {
// console.log("Olá")
// numero++
// } while (numero <= 5)


  // Exemplo Prático com DOM
  let soma = 0

  // Iniciando o loop for 
  for(let i = 1; i <=10; i++){
    soma += i
    console.log(i)   
  }
  
  document.getElementById("resultado").textContent = "Soma total:" + soma 