//** 1. Arvore Dom na estrutura HTML com o elemento querySelector usando a # para o id do h1
const titulo = document.querySelector('#titulo');
  
//----------------------------//-------------------------
//**2. Manipular o DOM para alterar a cor do titulo para azul
titulo.style.color = 'blue';

//----------------------------//-------------------------

// ** 3. Elementos DOM
//Cada parte da página HTML é representada por elementos do DOM. Os principais tipos:

//** Elementos: Representam tags HTML (<div>, <p>, <img/>

//** Atributos:  id, class, href

//** Textos: Conteúdo dentro de uma tag

//** windows | document | location aparece a url
window.document.write(window.document.URL) // Vai aparecer a url do navegador

//----------------------------//-------------------------

// **4. Capturando elementos**

//**Existem várias formas de **selecionar elementos** da página com JavaScript:

//** Você pode usar seletores simples (como div, .classe, #id) ou compostos (como div > .item, ul li.active, etc.). Diferente do getElementById(), que retorna um único elemento, o querySelectorAll() retorna todos os elementos que combinam com o seletor.

// **Método**

// **Descrição**

//** getElementById(): Seleciona pelo ID

// ** getElementsByClassName(): seleciona por classe (retorna HTMLCollection)

// ** getElementsByTagName():  Seleciona por tag

// ** querySelector(): Seleciona o **primeiro** elemento que bater com o seletor

//** querySelectorAll(): Seleciona **todos** os elementos que batem com o seletor (retorna NodeList)

// ** Exemplo com a classe id e o elemento:  getElementById para capturar a cor
const subtitulo = document.getElementById('subtitulo');
subtitulo.style.color = 'red';

//----------------------------//-------------------------
// ** 5. Eventos em JS
 // ** exemplo1
 const botao = document.getElementById("meuBotao");

  botao.onclick = function() {
    alert("Você clicou no botão!");
  }

// ** exemplo2 com funções
// Adiciona um ouvinte para o evento DOMContentLoaded, que é disparado quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  // Declara um array inicial com os itens que vão aparecer na lista
  let itensAdicionados = ['Notebook', 'Mouse', 'Teclado'];

  // Pega do DOM o elemento <ul> onde os itens serão exibidos
  const lista = document.getElementById('minhaLista');
  
  // Pega do DOM o botão que vai adicionar novos itens
  const botao = document.getElementById('adicionar');

  // Função para limpar e atualizar a lista na tela com o conteúdo do array
  function renderizarLista() {
    lista.innerHTML = ''; // Limpa itens antigos da lista
    itensAdicionados.forEach(item => { // Para cada item do array
      const li = document.createElement('li'); // Cria um <li> novo
      li.textContent = item; // Define o texto do item no <li>
      lista.appendChild(li); // Adiciona o <li> na lista o DOM (<ul>)
    });
  }

  // Define o que acontece quando o botão for clicado
  botao.onclick = function() {
    // Pergunta ao usuário qual item deseja adicionar
    const novoItem = prompt('Digite um item para adicionar:');
    // Se o usuário digitou algo, adiciona ao array e atualiza a lista
    if (novoItem) {
      itensAdicionados.push(novoItem); // Adiciona o novo item no final do array
      renderizarLista(); // Atualiza visualmente a lista no DOM
    }
  };

  // Chama a função para mostrar os itens iniciais na tela
  renderizarLista();
});




