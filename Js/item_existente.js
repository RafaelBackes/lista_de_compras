document.getElementById('adicionar').addEventListener('click', function () {
    const input = document.getElementById('item');
    const novo_item = input.value.trim();
    const lista_mes = document.getElementById('lista');
    
    if (novo_item === lista_mes  ) {
        for (let i = 0; i < array.length; i++) {
            const lista_mes = array[i];
            if (novo_item === lista_mes) {
                alert("Item já inserido !!");
            }
    
        }
    }
});