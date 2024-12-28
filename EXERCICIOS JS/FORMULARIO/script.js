////////////
function capturarValores() {
    const nome = document.getElementById('campoNome').value;
    const idade = document.getElementById('campoIdade').value;

 document.getElementById('mostraNome').textContent = `Nome: ${nome}, Idade: ${idade}`;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
} .