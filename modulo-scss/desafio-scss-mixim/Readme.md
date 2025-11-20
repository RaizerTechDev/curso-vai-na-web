# Projeto Desafio SASS Mixin- Desafio Completo

<div align="center">

<img src="https://media.giphy.com/media/3zSF3Gnr7cxMbi6WoP/giphy.gif" align="center" height="55" width="55" /> [Demonstração-Página do Desafio-SASS] <img src="https://media.giphy.com/media/E5DzZsofmgxc9wjbhX/giphy.gif" align="center" height="35" width="35" />

<img height="480em" src="./assets/images/desafio-sass.gif" align="center" />

</div>

***

<br>

## Índice 📚

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Estrutura do Código](#estrutura-do-código)
- [Mixins e Variáveis](#mixins-e-variáveis)
- [Condicional de Tema](#condicional-de-tema)
- [Extensão Live Sass Compiler no VSCode](#extensão-live-sass-compiler-no-vscode)
- [Licença](#licença)  
- [Autor](#autor)


---

## Descrição

Projeto realizado como desafio para aplicar conhecimentos de SASS, criando estruturas modulares com mixins, variáveis e condicionais para temas claro e escuro.

<br>

***

## Tecnologias Utilizadas

- SASS/SCSS
- CSS3
- HTML5

<br>

***

## Como Rodar o Projeto

<img src="https://media.giphy.com/media/u2pmTWUi0MXjyrMaVj/giphy.gif" align="center" height="65" width="65" />  

1. Abra o arquivo HTML no navegador .

- No arquivo `index.html` clique com o botão direito e selecione:  
Open With Live Server

- Assim abrirá no navegador o desafio SASS com o título: `Desafio-Sass-VNW`

<br>

***

## Estrutura do Código

O código está organizado em arquivos SCSS com uso de:

- Mixins para backgrounds
- Variáveis para cores principais
- Aninhamento para organização dos seletores
- Condicional para tema (light/dark)

<br>

*** 

## Mixins e Variáveis

O projeto contém um mixin para aplicar fundos de forma padronizada:

```code
@mixin bg-image($url) {
background-image: url(#{$url});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
}
```

Variáveis para cores permitem fácil manutenção:

```code
$header-bg-color: #333333;
$header-highlight-color: rgb(147, 249, 92);
```

## Condicional de Tema

O tema claro ou escuro é alterado com uma variável `$theme` e condicional:

```code
$theme: 'dark'; // 'light' ou 'dark'

footer {
@if $theme == 'light' {
background-color: #fff;
color: #333;
} @else if $theme == 'dark' {
background-color: #222;
color: $header-highlight-color;
} @else {
background-color: #f0f0f0;
color: #000;
}
}
```

<br>

*** 

## Extensão Live Sass Compiler no VSCode

Para facilitar a compilação automática dos arquivos `.scss` em `.css` durante o desenvolvimento, recomendamos instalar a extensão **Live Sass Compiler** no Visual Studio Code.

### Passos para usar a extensão:

1. Abra o Visual Studio Code.
2. Vá para o menu de Extensões (ícone quadrado na barra lateral esquerda ou `Ctrl+Shift+X`).
3. No campo de busca, digite **Live Sass Compiler** e instale a extensão desenvolvida por Ritwick Dey.
4. Após a instalação, abra seu arquivo `.scss` e, na barra de status (parte inferior do VSCode), clique em **Watch Sass** para ativar a compilação automática.
5. A extensão irá gerar automaticamente o arquivo `.css` correspondente na mesma pasta ou na pasta configurada.
6. Para parar a compilação automática, clique em **Stop Watching Sass** na barra de status.

### Benefícios

- Compilação em tempo real ao salvar os arquivos.
- Geração de arquivos CSS expandidos ou minificados.
- Facilita o desenvolvimento sem precisar rodar comandos manualmente no terminal.

<br>

***

### Licença

- Esse projeto está sob a licença MIT.

***

<img src="https://media.giphy.com/media/ImmvDZ2c9xPR8gDvHV/giphy.gif" align="center" height="25" width="25" />  

### Autor

<p>
  <img align="left" margin="10" width="80" src="https://avatars.githubusercontent.com/u/87991807?v=4" />
  <p>&nbsp;&nbsp;&nbsp;RafaRaizer-Dev<br>
  &nbsp;&nbsp;&nbsp;<a href="https://api.whatsapp.com/send/?phone=47999327137">Whatsapp</a> | <a href="https://www.linkedin.com/in/raizer-rafael/">LinkedIn</a> | <a href="https://github.com/RaizerTechDev">GitHub</a> | <a href="https://public.tableau.com/app/profile/rafael.raizer">Tableau</a> | <a href="https://raizertechdev-portfolio.netlify.app/">Portfólio</a>  
  </p>
</p>





