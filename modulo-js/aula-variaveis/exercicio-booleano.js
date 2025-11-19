
// 1 .Crie 2 variaveis para booleano com true e false e mostre o resulto no prompt com alert e no html.
let modeloCarro = 'Corolla' 
let marcaEsperada = 'Toyota'

// Teste 01: Toyota === Corolla: true 
let marca1 = 'Toyota' 
let comparacao1 = marca1 === marcaEsperada

// Teste 02: Volvo  === Corolla: false
let marca2 = 'Volvo'
let comparacao2 = marca2 === modeloCarro

console.log(`
🔍 Comparação MARCA vs MODELO:
• "${marca1}" === "${modeloCarro}"? ${comparacao1}
• "${marca2}" === "${modeloCarro}"? ${comparacao2}
`)

//  -----------Exemplo com Prompt | alert | e document.querySelector ------------------------
let resultado= document.querySelector('#resultado')

let carroModelo1 = prompt('Digite o modelo: ')
let marcaCarroEsperada = prompt('Digite a marca esperada')

// Teste 01: Toyota === Corolla: true 
let marcaCarro1 = prompt('Digite a Marca correta') 
let comparacaoCarro1 = marcaCarro1 === marcaCarroEsperada


// Teste 02: Volvo  === Corolla: false
let marcaCarro2 = prompt('Digite outra marca') 
let comparacaoCarro2 = marcaCarro2 === carroModelo1

// Mostrar resultados com alert
alert(`
📊 RESULTADOS:

Teste 1: "${marcaCarro1}" === "${carroModelo1}" ? ${comparacaoCarro1}

Teste 2: "${marcaCarro2}" === "${carroModelo1}" ? ${comparacaoCarro2}
`)

// Resultado no html
resultado.textContent = 
`• ${marcaCarro1} === ${carroModelo1} ? ${comparacaoCarro1}
\n
• ${marcaCarro2} === ${carroModelo1} ? ${comparacaoCarro2}`