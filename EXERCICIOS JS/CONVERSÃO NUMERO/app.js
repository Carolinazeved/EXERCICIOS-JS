//Crie uma função que aceite uma string como parâmetro, 
// utilize a função parseInt para converter essa string 
// em um número inteiro e retorne o resultado
function converterString(valorString) {
    return parseInt(valorString);
}
    let valorString = "35";
    let valorInteiro = converterString(valorString);
    alert(valorInteiro);  
    
    function converter() {
        let valorString = document.getElementById("inputString").value;
        let valorInteiro = converterString(valorString);
        
        if (isNaN(valorInteiro)) {
            alert("Valor inválido. Por favor, insira um número.");
        } else {
            alert(`O número convertido é: ${valorInteiro}`);
        }
    }
    