document.getElementById('adicionar').addEventListener('click', function () {
    const input = document.getElementById('item');
    const novo_item = input.value.trim();

    if (novo_item) {
        const lista_mes = document.getElementById('lista');

        // Criando um novo item da lista
        const item = document.createElement('li');
        item.textContent = novo_item;

        // Criando o botão de excluir
        const excluir = document.createElement('button');
        excluir.textContent = "Remover";
        excluir.classList.add('remover');
        excluir.onclick = function () {
            lista_mes.removeChild(item); // Remove o item da lista
        };

        // Adicionando o botão ao item da lista
        item.appendChild(excluir);
        lista_mes.appendChild(item);

        // Limpando o campo de entrada
        input.value = "";
    } else {
        alert("Por favor, insira um item");
    }
});