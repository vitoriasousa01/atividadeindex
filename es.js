// Selecionando todas as células com a classe situacao
const situacoes = document.getElementsByClassName("situacao");

// Percorrendo todas as células
for (const celula of situacoes) {

    // Verificando o texto de cada célula
    if (celula.textContent.trim() === "Concluído") {

        // Aplicando a cor verde
        celula.style.color = "#22c55e";

    } else if (celula.textContent.trim() === "Pendente") {

        // Aplicando a cor vermelha
        celula.style.color = "#ef4444";

    }

}