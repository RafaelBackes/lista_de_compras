// Importa as funções de manipulação de cookies do módulo cookies.js
import { setCookie, getCookie, deleteCookie } from './cookies.js';

const itensExistentes = new Set();

// Função para salvar os itens no cookie
function salvarItensNoCookie() {
    const lista = Array.from(itensExistentes); // Converte o Set para um array
    setCookie('listaDeCompras', JSON.stringify(lista), 30); // Salva por 30 dias
}

// Função para carregar os itens do cookie
function carregarItensDoCookie() {
    const itensSalvos = getCookie('listaDeCompras');
    if (itensSalvos) {
        const lista = JSON.parse(itensSalvos); // Converte de volta para array
        lista.forEach(item => adicionarItemNaLista(item)); // Adiciona os itens à lista
    }
}

// Função para adicionar item à lista visualmente e ao Set
function adicionarItemNaLista(novo_item) {
    const lista_mes = document.getElementById('lista');

    // Cria o elemento <li> para o novo item
    const item = document.createElement('li');
    item.textContent = novo_item;

    // Cria o botão de exclusão
    const excluir = document.createElement('button');
    excluir.textContent = "Remover";
    excluir.classList.add('remover');
    excluir.onclick = function () {
        lista_mes.removeChild(item);
        itensExistentes.delete(novo_item);
        salvarItensNoCookie(); // Atualiza o cookie após remover
    };

    item.appendChild(excluir);
    lista_mes.appendChild(item);

    // Adiciona o novo item ao conjunto
    itensExistentes.add(novo_item);

    // Adiciona a classe 'show' após um pequeno atraso para garantir que a transição ocorra
    setTimeout(() => {
        item.classList.add('show');
    }, 10); // Atraso de 10ms

    salvarItensNoCookie(); // Salva a lista atualizada no cookie
}

// Evento para adicionar item quando o botão é clicado
document.getElementById('adicionar').addEventListener('click', function () {
    const input = document.getElementById('item');
    const novo_item = input.value.trim();

    if (novo_item) {
        if (itensExistentes.has(novo_item)) {
            alert("Esse item já foi adicionado.");
        } else {
            adicionarItemNaLista(novo_item);
        }
        input.value = ""; // Limpa o campo de entrada
    } else {
        alert("Por favor, insira um item");
    }
});

// Carrega os itens salvos no cookie ao carregar a página
window.onload = function () {
    carregarItensDoCookie();
};
