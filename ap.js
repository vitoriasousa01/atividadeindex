
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const botaoSomar = document.getElementById("btn-somar");
const resultado = document.getElementById("resultado-soma");

botaoSomar.addEventListener("click", function() {

    // Capturando e convertendo os valores para números decimais
    const numero1 = parseFloat(valor1.value);
    const numero2 = parseFloat(valor2.value);

    // Realizando a soma
    const soma = numero1 + numero2;

    // Exibindo o resultado na página
    resultado.textContent = "Resultado da soma: " + soma;

});
