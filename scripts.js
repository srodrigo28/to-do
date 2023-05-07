const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");   

let minhaLista = []
function AdicionaTarefa() {
    minhaLista.push(input.value)
    MostrarTarefas()
}
function MostrarTarefas() {
    let novaLi = ''
    //nada
    minhaLista.forEach((tarefa) => {
            novaLi = novaLi + `
            <li class="tarefa">
                <img src="./img/checked.png" alt="check-na-tarefa">
                <p>${tarefa}</p>
                <img src="./img/trash.png" alt="tarefa-para-o-lixo">
            </li>
        `
    })
    listaCompleta.innerHTML = novaLi
}
button.addEventListener("click", AdicionaTarefa)