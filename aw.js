// Selecionando os elementos HTML
const botaoCriar = document.getElementById("btn-criar-aviso");
const container = document.getElementById("container-avisos");

// Adicionando evento de clique ao botão criar aviso
botaoCriar.addEventListener("click", function() {

    // Criando a div do aviso
    const aviso = document.createElement("div");

    // Adicionando a classe ao aviso
    aviso.classList.add("aviso-item");

    // Criando o texto do alerta
    const mensagem = document.createElement("p");
    mensagem.textContent = "Atenção! Este é um aviso importante.";

    // Criando o botão para fechar o aviso
    const botaoFechar = document.createElement("button");
    botaoFechar.textContent = "X";

    // Adicionando evento para remover o aviso
    botaoFechar.addEventListener("click", function() {
        aviso.remove();
    });

    // Inserindo a mensagem e o botão dentro da div
    aviso.appendChild(mensagem);
    aviso.appendChild(botaoFechar);

    // Inserindo o aviso no container
    container.appendChild(aviso);

});