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

### 2. Estilização com CSS

Estilização dos elementos da página, incluindo contêiner da lista com bordas arredondadas e cor azul pastel.

```css
:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-tertiary: #C4C4C4;
    --color-button: #fe652b;
    --color-button-hover: #e55720;
    --color-text: #444444;
    --color-white: #FFFFFF;
    --color-green-pastel: #B7E4C7;
}

body {
    height: 100vh;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.header-banner {
    flex: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0;
}

.input-section {
    flex: 60%;
    background-color: var(--color-secondary);
    border: 1px solid #000;
    border-radius: 64px 64px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
}

.main-title {
    font-size: 48px;
    font-family: "Merriweather", serif;
    font-weight: 900;
    font-style: italic;
    color: var(--color-white);
}

.section-title {
    font-family: "Inter", serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--color-primary);
    margin: 10px 0;
    text-align: center;
}

.input-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
}

.input-name {
    width: 100%;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 25px 0 0 25px;
    font-size: 16px;
}

.button-container {
    width: 300px;
    justify-content: center;
}

button {
    padding: 15px 30px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    border: 2px solid #000;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.button-add {
    background-color: var(--color-tertiary);
    color: var(--color-text);
    border-radius: 0 25px 25px 0;
}

.button-add:hover {
    background-color: #a1a1a1;
}

.lista-container {
    width: 100%;
    max-width: 600px;
    background-color: var(--color-white);
    border: 2px solid var(--color-green-pastel);
    border-radius: 15px;
    margin-top: 20px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

ul {
    list-style-type: none;
    color: var(--color-text);
    font-family: "Inter", sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
}

.name-list li {
    padding: 5px 0;
}

.result-list {
    margin-top: 15px;
    color: #05DF05;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
}

.button-draw {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 40px;
    color: var(--color-white);
    background-color: var(--color-button);
    font-size: 16px;
}

.button-draw img {
    margin-right: 40px;
}

.button-draw:hover {
    background-color: var(--color-button-hover);
}

### 3. Implementação com JavaScript

Criação das funções para adicionar amigos, validar entradas, atualizar a lista, sortear amigos e acionar o botão "Adicionar" com a tecla "Enter".

```JavaScript
// Array para armazenar os nomes
let amigos = [];

// Função para validar a entrada, permitindo apenas letras, espaços, e combinações dos símbolos ´ ^ ~ ç com vogais
function validarEntrada(nome) {
    const regex = /^[A-Za-z\sáéíóúâêîôûãõçÁÉÍÓÚÂÊÎÔÛÃÕ]+$/; // Permite letras, espaços e combinações de símbolos com vogais
    return regex.test(nome);
}

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim(); // Remove espaços extras

    if (!validarEntrada(nomeAmigo)) {
        alert("Por favor, insira um nome válido (apenas letras, espaços e combinações dos símbolos ´ ^ ~ ç com vogais).");
        input.value = ""; // Limpa o campo de entrada
        return;
    }

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome ao array e atualiza a lista na página
    amigos.push(nomeAmigo);
    atualizarLista();
    input.value = ""; // Limpa o campo de entrada
}

// Função para agregar múltiplos amigos à lista
function agregarAmigos() {
    const input = document.getElementById('amigos');
    const nomesAmigos = input.value.trim().split(',');

    nomesAmigos.forEach(nome => {
        const nomeTrim = nome.trim();
        if (nomeTrim !== "" && validarEntrada(nomeTrim)) {
            amigos.push(nomeTrim);
        } else if (nomeTrim !== "") {
            alert(`"${nomeTrim}" não é um nome válido. Por favor, insira apenas letras, espaços e combinações dos símbolos ´ ^ ~ ç com vogais.`);
        }
    });

    atualizarLista();
    input.value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista visível na página
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista

    amigos.forEach((amigo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        lista.appendChild(listItem);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const sorteadoIndex = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[sorteadoIndex];

    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}

// Adicionar event listener para acionar o botão "Adicionar" ao pressionar "Enter"
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});
