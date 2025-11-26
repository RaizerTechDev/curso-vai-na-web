// ** Funções: Em JavaScript, uma **função** é um **bloco de código reutilizável** que executa uma tarefa específica. Você pode pensar nela como uma “máquina” que recebe entradas, processa essas entradas, e retorna um resultado (ou apenas realiza uma ação).

// ** Elas ajudam a **organizar melhor o código**, **evitar repetições** e deixar tudo mais legível.

//---------------------------//----------------

// ** 1 Estrutura de uma Função Tradicional:**

function nomeDaFuncao(parametros) {
// ** Código a ser executado
}

// **function:** palavra-chave para criar a função
// **nomeDaFuncao:** nome que você escolhe para representar a função
// **parametros**: são as "entradas" que a função pode receber
// **{ }**: o "corpo" da função, onde fica o código
// ** Chamada da função no final

// ** Exemplo 1 Parametros no parenteses

// function info(nome, idade, cidade) {
// Passar a instrução para chamar do parametro
// console.log(nome,)
// console.log(idade)
// console.log(cidade)
// console.log(nome, idade, cidade)
// }

// info('Rafa', 49, 'Lages' )

// ** Exemplo 2 Parenteses sem parametro
// function nome() {
//   console.log('Rafa')
//   console.log('49')
// }

// nome()


//** Exemplo 3. Parametro com variavel
// let meuNome = 'Paulo'

// function mostraNome(nome){
//   console.log(`Olá ${nome}`)
// }

// mostraNome(meuNome)

// Função com return
// function soma(n1, n2){
//   return n1 + n2
//   }

//   console.log(soma(20, 5))

//--------------------//---------------

// ** 2 Estrutura de uma Arrow Function**

//**  Função de callback ou anônima 

// ** const nomeDaFuncao = (parametros) => {
// ** Código a ser executado
// ** }

// **const**: a função é armazenada em uma constante
// **(parametros)**: entradas da função
// **=>**: símbolo que indica a função arrow
// **{ }**: corpo da função
// ** Chamada da função no final

// ** Exemplo 1 () sem parametro.
let nome = 'Rafa'
const meuNome = () => {
 console.log(`Meu nome é ${nome}! `)
}
meuNome() // ** Meu nome é Rafa! 

//-----------------------//---------------

// ** 3 Estrutura Funções com Parâmetros
// ** Parâmetros são variáveis que você declara na definição da função, e que vão receber valores quando a função for executada.
// ** Já os argumentos são os valores reais que você passa ao chamar essa função.

// **const**: a função é armazenada em uma constante
// **(parametros)**: entradas da função
// **=>**: símbolo que indica a função arrow
// **{ }**: corpo da função
// ** Chamada da função no final

//  ** Exemplo 2 () com parametro.
let meuSobrenome = 'Raizer'

const saudacao = (sobrenome) => {
  console.log(`Olá, " ${sobrenome}!`);
  console.log("Olá " + sobrenome + "!")  // ** Atarvés da Concactenação
}

saudacao(meuSobrenome); // ** Imprime "Olá, Raizer!"

//---------------------------------//-----------------------------

// **4. Estrutura de uma Arrow Function com retorno:**

// ** Uma função com retorno é uma função que, depois de executar seu código, **devolve um valor** para quem a chamou. Esse valor pode ser usado em outras partes do programa, armazenado em variáveis, ou passado para outras funções.

// ** Ou seja, a função não só “faz algo”, mas também **entrega um resultado** para você usar depois.

// ** const nomeDaFuncao = (parametros) => {
//  ** return valor;
//** }

// ** Ou, quando for apenas uma linha, com retorno implícito (sem precisar escrever return):

//** const nomeDaFuncao = (parametros) => valor;

// **Exemplo 1 (adição).

const soma = (a1, b2) => {
  return a1 + b2;
}

console.log(soma(20, 30)); //* 50

// **Exemplo 2 com variaveis let (subtração).
let sub1 = 80
let sub2 = 25

const subtracao = (a1, b2) => {
  return a1 - b2;
}

console.log(subtracao(sub1, sub2)); //* 55


// **No exemplo acima a função soma recebe dois números como parâmetros (a1 e a2) e retorna a soma deles. O resultado é 24, e é exibido no console.

// **Versão mais curta (com retorno implícito)**

// **Exemplo 1 (divisão).

const divisao = (n1, n2) => n1 / n2;

console.log(divisao(20, 5)); // * 4

// **Exemplo 2 com variaveis let (multiplicação).

let mult1 = 80
let mult2 = 10

const multiplicacao = (n1, n2) => n1 * n2;

console.log(multiplicacao(mult1, mult2)); // * 800

// ** Usamos acima a versão simplificada da arrow function. O JavaScript entende automaticamente que o valor deve ser retornado.

//-------------------//------------------//-----------

// Disparando Eventos
function mudarTexto() {

  const titulo = document.getElementById("titulo");

    if (titulo.textContent === "O texto mudou!") {

      titulo.textContent = "Boa noite!";

    } else {

      titulo.textContent = "O texto mudou!";

    }

  // titulo.textContent =

  //   titulo.textContent === "O texto mudou!" ? "Boa noite!" : "O texto mudou!";

}

function mostrarNome() {
  const valor = document.getElementById('nome').value
  document.getElementById('resultado').textContent = valor
}

document.getElementById('nome').addEventListener('input', mostrarNome)



function entrar(){
  document.getElementById('caixa').style.background = 'lightgreen'
}

function sair(){
  document.getElementById('caixa').style.background = 'lightblue'
}