
function modificarConteudo() {
    const paragrafo = document.getElementById('meuParagrafo');
    paragrafo.textContent = 'Novo texto modificado dinamicamente!';
}

// exercicio 04 : soma de dois numeros
const numero1 = 10;
const numero2 = 20;

const soma = numero1 + numero2;
const mensagem = `A soma de ${numero1} e ${numero2} é = ${soma}.`;

console.log(mensagem);

//exercicio 05: separador de duas sentencas
const duasSentencas = "Livre-se do açucar; do doce nunca!"
const frasesSeparadas = duasSentencas.split(';');

console.log(frasesSeparadas);