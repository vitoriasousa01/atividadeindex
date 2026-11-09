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