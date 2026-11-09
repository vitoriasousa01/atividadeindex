// Selecionando os elementos HTML
const caixa = document.getElementById("caixa-destaque");
const info = document.getElementById("info-atributo");

const btnAlta = document.getElementById("btn-prioridade-alta");
const btnBaixa = document.getElementById("btn-prioridade-baixa");
const btnLimpar = document.getElementById("btn-limpar-atributo");

// Função para atualizar a informação na tela
function atualizarInfo() {

    // Lendo o atributo atual
    const prioridade = caixa.getAttribute("data-prioridade");

    // Atualizando o texto
    info.textContent = prioridade !== null ? prioridade : "Nenhum";

}

// Definindo prioridade alta
btnAlta.addEventListener("click", function() {

    caixa.setAttribute("data-prioridade", "alta");

    atualizarInfo();

});

// Definindo prioridade baixa
btnBaixa.addEventListener("click", function() {

    caixa.setAttribute("data-prioridade", "baixa");

    atualizarInfo();

});

// Removendo o atributo
btnLimpar.addEventListener("click", function() {

    caixa.removeAttribute("data-prioridade");

    atualizarInfo();

});