// Selecionando o formulário e a tabela
//const productForm = document.getElementById('productForm');
//const productList = document.getElementById('productList');
const stockForm = document.getElementById('stockForm');
const stockList = document.getElementById('stockList');

const estoque = {
    'Cloro': 0,
    'Bomba': 0,
    'Peneira': 0,
    'Filtro': 0,
};

function atualizarEstoque(event) {
    event.preventDefault(); // Evitar reload da página

    // Capturando o produto e a quantidade
    const produto = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);

    // Atualizando a quantidade do produto no objeto 'estoque'
    estoque[produto] += quantidade;

    // Atualizando a exibição do estoque
    exibirEstoque();
    
    // Limpando o campo de quantidade
    stockForm.reset();
}

function exibirEstoque() {
    // Limpar a tabela antes de atualizar
    stockList.innerHTML = '';

    // Adicionar cada produto e sua quantidade ao estoque
    for (let produto in estoque) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${produto}</td>
            <td>${estoque[produto]}</td>
        `;
        stockList.appendChild(newRow);
    }
}

// Adicionando evento para o formulário
stockForm.addEventListener('submit', atualizarEstoque);

// Exibir o estoque inicial (todos os produtos com quantidade 0)
exibirEstoque();