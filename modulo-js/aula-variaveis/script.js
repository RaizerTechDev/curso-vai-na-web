// ** Primitivos

// **Boolean** (ou **lógico**) é um tipo de dado que só pode ter dois valores:

// - true (verdadeiro)
// - false (falso)

// Ele é usado para **tomar decisões** no código. É como se fosse a resposta para perguntas de sim ou não.

const idade = 18;
const maiorDeIdade = idade >= 18;

console.log(maiorDeIdade); // true

// -----------------------

// **Number em JavaScript**

// O tipo number em JavaScript representa **tanto números inteiros quanto decimais** (ponto flutuante). É um tipo **primitivo**, muito usado em cálculos, validações e lógicas.

// ### **O que o tipo number pode representar?**

// - Números inteiros:
        
    let idade1 = 25;
    
// - Números decimais (ponto flutuante):
    let altura = 1.75;    


// ### **Exemplos práticos**
//**soma
let a = 10;
let b = 2.5;
let soma = a + b;           // 12.5
console.log(soma)

//**subtração
let aa = 10;
let bb = 2.5;
let subtracao = aa - bb;   
console.log(subtracao)        // 7.5

//**multiplicação
let aaa = 10;
let bbb = 2.5;
let multiplicacao = a * b;           //25
console.log(multiplicacao)

//**divisão
let aaaa = 10;
let bbbb = 2.5;
let divisao = aa / bb;   
console.log(divisao)        // 4

// -----------------------

// **O que é uma String**

// **String** é um tipo de dado usado para representar **textos**. Uma string é composta por uma sequência de caracteres, como letras, números, espaços e símbolos, tudo isso envolvido por **aspas simples (‘ ’)**, **aspas duplas (“ ”)** ou **crases (' ')**.

// Exemplos:
const nome = "Fernanda"
console.log(nome)

// -----------------------

// **Undefined em JavaScript**

// undefined é um **tipo primitivo** em JavaScript e significa que **uma variável foi declarada, mas ainda não recebeu nenhum valor**.

// ---

// ### **📌 Quando algo é undefined?**

// **1. Variável declarada, mas não inicializada**
 let marca   
 console.log(marca); // undefined

// **2. Função sem return
function saudacao() {
  console.log("Olá!"); // aqui ao invés do return foi usado console.log pra imprimir no ultimo console => undefined 
}
let resultado = saudacao();
console.log(resultado); // undefined

// **3. Acesso a propriedades inexistentes**
let pessoa = { nome: "Ana" };
console.log(pessoa.idade); // volta undefined, pois não existe a propriedade idade


// **4. Parâmetro não passado**
function mostrarMensagem(mensagem) { // parametro da mensagem não foi passado por isso imprimi ao retorno da funçao mostrada no final => undefined 
  // se fosse passar um parametro seria function mostrarMensagem(mensagem = "Olá"){}
  console.log(mensagem); 
}
mostrarMensagem(); // undefined

// -----------------------
// **null em JavaScript**

// O null é um **tipo primitivo** usado para representar **"ausência intencional de valor"**.
// Ou seja: **você diz explicitamente que algo não tem valor**.

// ---

// ### **Quando usar null**

// Use null quando **você quiser limpar, resetar ou indicar que algo está vazio** de forma proposital.
//exemplo 1
let produto = null; /// null (valor intencionalmente vazio)
console.log(produto)

// exemplo 2
let carrinho = {
  produto: "Notebook", // define o valor string
  desconto: null // Ainda não tem desconto aplicado, pois vai imprimir algo que esta vazio
};
console.log(carrinho)

// exemplo 3
let sessaoUsuario = "vinicius";
sessaoUsuario = null; //  O usuário sai do sistema, pois vai limpar ao imprimir

console.log(sessaoUsuario)

// -----------------------

// **BigInt em JavaScript**

// BigInt é um tipo primitivo usado para representar **números inteiros muito grandes**, **acima do limite do tipo** number.

// **Por que usar BigInt?**

// Em JavaScript, o tipo number tem um limite seguro:

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991


// Se você ultrapassar esse valor com number, pode perder **precisão**.
// Com BigInt, você consegue representar valores **inteiros enormes** sem erro.


// # **Como criar um BigInt**

// 1. **Adicionando um** n **no final do número:**
let numeroGrande = 123456789012345678901234567890n; // adicionado n ao final
console.log(numeroGrande)

// 1. **Ou usando o construtor:**
let outroNumero = BigInt("123456789012345678901234567890");
console.log(outroNumero)

// # **Operações com BigInt**
let r= 10n;
let s = 3n;

console.log(r + s); // 13n
console.log(r * s); // 30n
console.log(r / s); // 3n (arredonda para baixo, sem decimais)


// **Importante: não misture BigInt com number diretamente:**

// * let x = 10n;
// * let y = 5;
// * console.log(x + y); // ❌ ERRO: Cannot mix BigInt and other types

// **Observações importantes**

//  **Não funciona com** Math: 
// * Math.sqrt(25n); // ERRO
  
    
// - **Aceita comparação com** number**:**

console.log(10n === 10); // false (tipos diferentes)
console.log(10n == 10);  // true (valores iguais, comparação fraca)

// -----------------------

// ** Template String**

// ### **Template String (ou Template Literal) no JavaScript**

// As **template strings** são uma forma moderna (ES6) e muito prática de criar **strings dinâmicas** em JavaScript, com **interpolação de variáveis** e **quebras de linha** embutidas, sem precisar concatenar com `+`.

// ---

// ### **Sintaxe**

// Template strings são envolvidas por **crases** ``` (em vez de aspas `'` ou `"`).

//exemplo com const
const name = "Vinicius";
const mensagem = `Olá, ${name}! Bem-vindo.`;
console.log(mensagem); // Olá, Vinicius! Bem-vindo.


// **1. Interpolação de variáveis e expressões**
// **Principais Vantagens**

//Exemplos com let
let idade2 = 25;
let texto = `Você tem ${idade2} anos.`;
console.log(texto)

// ** Você pode até usar expressões diretamente:
let m = 5;
let n = 10;
console.log(`Soma: ${m + n}`); // Soma: 15

// ** 2. Em HTML dinâmico (muito útil!)

let produto1 = "Mouse";
let preco = 49.90;

let meuContainer = document.querySelector('#container')

let card = `
  <div class="produto1">
    <h3>${produto1}</h3>
    <p>Preço: R$ ${preco}</p>
  </div>
`
;

meuContainer.innerHTML += card