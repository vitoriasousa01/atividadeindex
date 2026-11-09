// Selecionando os elementos HTML
const botaoTema = document.getElementById("btn-toggle-tema");
const modulo = document.getElementById("modulo-4");

// Adicionando evento de clique ao botão
botaoTema.addEventListener("click", function() {

    // Alternando a classe dark-theme
    modulo.classList.toggle("dark-theme");

});