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
