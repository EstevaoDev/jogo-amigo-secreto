# Amigo Secreto

Este projeto é uma aplicação simples de "Amigo Secreto" que permite aos usuários inserir nomes de amigos em uma lista e realizar um sorteio aleatório para determinar quem é o amigo secreto. 

## Funcionalidades

- **Adicionar nomes**: Os usuários podem adicionar nomes de amigos por meio de um campo de texto e de um botão "Adicionar".
- **Validar entrada**: A aplicação valida a entrada para aceitar apenas letras, espaços e combinações dos símbolos "´", "^", "~", "ç" com vogais.
- **Visualizar a lista**: Os nomes inseridos são exibidos em uma lista visível na página.
- **Sorteio aleatório**: Um botão "Sortear Amigo" permite selecionar aleatoriamente um nome da lista e exibir o resultado na tela.
- **Utilizar a tecla Enter**: Os usuários podem usar a tecla "Enter" para acionar o botão "Adicionar".
- **Agregar múltiplos amigos**: Permite inserir múltiplos nomes separados por vírgulas.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Estrutura do Projeto

### HTML

O arquivo HTML (`index.html`) estrutura a aplicação, incluindo os elementos para entrada de nomes, exibição da lista e o botão para sortear.

### CSS

O arquivo CSS (`style.css`) estiliza a aplicação, definindo cores, layout e estilos para os elementos da página.

### JavaScript

O arquivo JavaScript (`app.js`) implementa a lógica da aplicação, incluindo as funções para adicionar nomes, validar entradas, atualizar a lista e sortear amigos.

## Passo a Passo

### 1. Estruturação do HTML

Criação da estrutura básica da página com campos de entrada, botões e listas.

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <title>Amigo Secreto</title>
</head>
<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
            <img src="assets/amigo-secreto.png" alt="Imagem representativa de amigo secreto">
        </header>
        <section class="input-section">
            <h2 class="section-title">Digite o nome dos seus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Digite um nome">
                <button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
            </div>
            <div class="lista-container">
                <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
            </div>
            <ul id="resultado" class="result-list" aria-live="polite"></ul>
            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
                    <img src="assets/play_circle_outline.png" alt="Ícone para sortear">
                    Sortear amigo
                </button>
            </div>
        </section>
    </main>
    <script src="app.js" defer></script>
</body>
</html>
