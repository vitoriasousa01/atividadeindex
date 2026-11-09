
const titulo = document.getElementById("titulo-principal");
const paragrafo = document.getElementById("paragrafo-boas-vindas");
const botao = document.getElementById("btn-alterar-texto");

console.log("Título atual:", titulo.textContent);
console.log("Parágrafo atual:", paragrafo.textContent);


botao.addEventListener("click", function() {

    titulo.textContent = "DOM Manipulado com Sucesso!";

    paragrafo.textContent = "Olá! O conteúdo desta página foi alterado dinamicamente utilizando JavaScript e a propriedade textContent.";

});
// Selecionando os elementos HTML
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const botaoSomar = document.getElementById("btn-somar");
const resultado = document.getElementById("resultado-soma");

// Adicionando evento de clique ao botão
botaoSomar.addEventListener("click", function() {

    // Capturando e convertendo os valores para números decimais
    const numero1 = parseFloat(valor1.value);
    const numero2 = parseFloat(valor2.value);

    // Realizando a soma
    const soma = numero1 + numero2;

    // Exibindo o resultado na página
    resultado.textContent = "Resultado da soma: " + soma;

});
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
// Selecionando os elementos HTML
const botaoTema = document.getElementById("btn-toggle-tema");
const modulo = document.getElementById("modulo-4");

// Adicionando evento de clique ao botão
botaoTema.addEventListener("click", function() {

    // Alternando a classe dark-theme
    modulo.classList.toggle("dark-theme");

});
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
// Selecionando os elementos
const painel = document.getElementById("painel-botoes");
const log = document.getElementById("log-botao");

// Adicionando um único evento de clique ao elemento pai
painel.addEventListener("click", function(event) {

    // Verificando se o elemento clicado é um botão
    if (event.target.nodeName === "BUTTON") {

        // Exibindo o ID ou o texto do botão clicado
        log.textContent = "Botão clicado: " +
            (event.target.id || event.target.textContent);

    }

});
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
// Array global para armazenar as tarefas
let tarefas = [];

// Selecionando os elementos HTML
const lista = document.getElementById("lista-tarefas");
const formulario = document.getElementById("form-tarefa");
const inputTitulo = document.getElementById("input-tarefa-titulo");

// Função para atualizar a lista de tarefas
function render() {

    // Limpando a lista visual
    lista.innerHTML = "";

    // Percorrendo o array de tarefas
    tarefas.forEach(function(tarefa) {

        // Criando um elemento li
        const item = document.createElement("li");

        // Definindo o texto da tarefa
        item.textContent = tarefa.titulo;

        // Inserindo o item na lista
        lista.appendChild(item);

    });

}

// Evento de submissão do formulário
formulario.addEventListener("submit", function(event) {

    // Impedindo o recarregamento da página
    event.preventDefault();

    // Capturando o título digitado
    const titulo = inputTitulo.value.trim();

    // Verificando se o campo não está vazio
    if (titulo === "") {
        alert("Digite o título da tarefa!");
        return;
    }

    // Criando e adicionando um novo objeto ao array
    tarefas.push({
        titulo: titulo
    });

    // Limpando o campo de entrada
    inputTitulo.value = "";

    // Atualizando a lista visual
    render();

});