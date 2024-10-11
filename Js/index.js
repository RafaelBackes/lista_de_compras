const itensExistentes = new Set();

document.getElementById('adicionar').addEventListener('click', function () {
    const input = document.getElementById('item');
    const novo_item = input.value.trim();

    if (novo_item) {
        if (itensExistentes.has(novo_item)) {
            alert("Esse item já foi adicionado.");
            input.value = "";
            return;
        }

        const lista_mes = document.getElementById('lista');

        const item = document.createElement('li');
        item.textContent = novo_item;

        const excluir = document.createElement('button');
        excluir.textContent = "Remover";
        excluir.classList.add('remover');
        excluir.onclick = function () {
            lista_mes.removeChild(item);
            itensExistentes.delete(novo_item);
        };

        item.appendChild(excluir);
        lista_mes.appendChild(item);

        // Adiciona o novo item ao conjunto
        itensExistentes.add(novo_item);

        // Adiciona a classe show após um pequeno delay
        setTimeout(() => {
            item.classList.add('show');
        }, 10); // Um pequeno atraso para garantir que a transição ocorra

        input.value = "";
    } else {
        alert("Por favor, insira um item");
    }
});
