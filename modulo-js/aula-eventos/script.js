// ** Eventos
// Em JavaScript, eventos são ações que acontecem no navegador e que podemos "escutar" para executar algum código quando elas ocorrem.


//** Essas ações podem ser:

//**Um clique do mouse

//**O carregamento da página

//** A digitação em um campo

//** O movimento do mouse

//** E muito mais!

//** Você pode imaginar eventos como gatilhos que disparam funções. Quando algo acontece, o JavaScript reage.

//----------------//-----------
//** OnClick

//**onclick — Quando o usuário clica
//** É o evento mais usado no dia a dia. Ele é acionado quando o usuário clica com o mouse em um elemento da página, como um botão, uma imagem ou um link.

//**Usos comuns:

//** Executar uma ação ao clicar em um botão

//** Abrir ou fechar menus

//** Ativar/desativar algo

//** Exemplo 1 

const dizerOla = ()=>  {
  alert('Olá, bem vindo a minha aula!')
}

//---------------------//-------------

//** OnChange

// ** onchange (quando o valor de um input muda)
// ** Esse evento ocorre quando o valor de um campo muda e o foco sai do campo (ou seja, o usuário clica fora depois de mudar).

// **  Usos comuns:

// ** Detectar quando o usuário escolhe uma nova opção em um select

//** */ Saber quando algo foi alterado em inputs de formulário

//** Exemplo 1 vai digitar e sair da tela 

const nomeDigitado = ()=>  {
  console.log('Você digitou algo e saiu do campo!')
}

//---------------------//-------------

//** OnSubmit

// ** Esse evento é ativado quando um formulário é submetido (enviado).
// ** Ele é útil para validar os dados antes do envio ou impedir que a página recarregue automaticamente.

// ** Usos comuns:

// ** Validar campos antes de enviar

// ** Evitar recarregamento da página com event.preventDefault()

// ** Processar dados do formulário com JavaScript

// ** Exemplo 1

const enviarFormulario = (event) => {
  event.preventDefault() // ** impede o envio padrão do formulário
  alert('Formulário enviado com sucesso!')
}

//---------------------//-------------

//** OnMouseOver
// ** onmouseover (ao passar o mouse por cima)
// ** Esse evento é ativado quando o mouse entra na área de um elemento.
// ** É muito usado para criar efeitos visuais, como mudar a cor de um botão ou trocar uma imagem.

// ** Usos comuns:

// **/ Mostrar dicas (tooltips)

// ** Trocar imagem ao passar o mouse

// ** Destacar algo visualmente

// ** Exemplo 1

const destacaTexto = () => {
  document.querySelector('#passarMouse').style.color = 'red'
}

// ** OnMouseOut
// **  onmouseout (ao tirar o mouse de cima) é o oposto do onmouseover.
// **  Ele é ativado quando o mouse sai da área de um elemento.

// **  Usos comuns:

// **  Tirar o destaque de um elemento

// **  Esconder mensagens ou efeitos

// ** Exemplo junto com onMouseOver para voltar a cor após destacar ao passar o mouse

const voltaCor = () => {
  document.querySelector('#passarMouse').style.color = 'black'
}

//----------------------//------------------

// ** OnKeydown

// ** onkeydown (ao pressionar uma tecla) esse evento detecta quando o usuário pressiona uma tecla no teclado, antes mesmo de ela aparecer no campo.

// ** Usos comuns:

// ** Detectar atalhos de teclado

// ** Controlar jogos com setas

// **/ Capturar teclas específicas (como Enter ou Esc)

// * Exemplo

const teclaPressionada = () => {
  console.log('Uma Tecla foi pressionada!')
}

//----------------------//------------------

// * OnInput

// *   oninput (quando o usuário digita) esse evento é ativado a cada letra digitada em um campo de texto.
// *  Diferente do onchange, ele é mais rápido, porque reage enquanto a pessoa digita.

// * Usos comuns:

/// *  Mostrar texto em tempo real

// * Fazer busca dinâmica (como Google)

// *  Mostrar mensagens de validação enquanto o usuário digita

//** Exemplo 1 vai digitar e mostrar no console.log 

const monitorarTexto = () => {
  console.log('Alguém esta digitando...' ) // imprimindo
  
}

//** Exemplo 2 vai digitar e mostrar na tela 

function mostrarIdade(anos) {
const valor = document.getElementById('idade').value
document.getElementById('resultadoIdade').textContent = valor +  '\n anos' // imprimo na tela concatenando
}

document.getElementById('idade').addEventListener('input', mostrarIdade) 

//--------------//------------

// * OnLoad

// * onload (quando a página ou um elemento termina de carregar) esse evento é ativado automaticamente assim que a página inteira estiver carregada.
// * Você pode usá-lo para iniciar scripts, mostrar uma mensagem de boas-vindas, carregar dados, etc.

// *Usos comuns:

// * Executar algo ao abrir a página

// * Carregar conteúdos iniciais

// * Garantir que os elementos HTML estejam prontos antes do JS

const carregouPagina = () => {
  alert('Carregou Página!')

}