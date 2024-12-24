const readline = require('readline');

// Função que verifica se é palíndromo
function ehPalindromo(texto) {
    const textoNormalizado = texto.toLowerCase().replace(/[\W_]/g, '');
    const textoReverso = textoNormalizado.split('').reverse().join('');
    return textoNormalizado === textoReverso;
}

// Configuração para entrada de dados no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma palavra ou frase para verificar se é um palíndromo: ", (entrada) => {
    if (ehPalindromo(entrada)) {
        console.log(`"${entrada}" é um palíndromo!`);
    } else {
        console.log(`"${entrada}" não é um palíndromo.`);
    }
    rl.close();
});
