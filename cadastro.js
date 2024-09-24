const stockForm = document.getElementById('stockForm');
const stockList = document.getElementById('stockList');
const estoque = {
    'Cloro': 0,
    'Bomba': 0,
    'Peneira': 0,
    'Filtro': 0,
};
function atualizarEstoque(event) {
    event.preventDefault(); 
    const produto = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);

    estoque[produto] += quantidade;

    exibirEstoque();
    
    stockForm.reset();
}
function exibirEstoque() {
    stockList.innerHTML = '';
    for (let produto in estoque) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${produto}</td>
            <td>${estoque[produto]}</td>
        `;
        stockList.appendChild(newRow);
    }
}
stockForm.addEventListener('submit', atualizarEstoque);
exibirEstoque();
