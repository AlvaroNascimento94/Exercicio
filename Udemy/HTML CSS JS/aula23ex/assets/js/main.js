const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTafera(inputTarefa.value);
    limpaInput();
});
//criando um envento com o apertada da tecla, enter, o key code dela é 13
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTafera(inputTarefa.value);
        limpaInput();
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTafera(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criarApagar(li);
    salvarTarefa();
};

function criaLi() {
    const li = document.createElement('li');
    return li;
};

function criarApagar(li) {
    li.innerText += " ";
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
};

//evento para saber oq esta sendo clicado no documento
document.addEventListener('click', function (e) {
    const el = e.target;
    //ao clicar no botão de apagar quero apagar o 'pai' dele, ou seja 
    //de acordo com o codigo será o li
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        //colocando aq a função para apagar do 'mini database' 
        salvarTarefa();
    }
});

function salvarTarefa() {
    //ver quantos li tem, dos li, pegar os textos deles
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    //local no navegador para salvar coisas, e oq quero salvar
    //como so salva string, teve q converter o json para string
    localStorage.setItem('tarefas', tarefasJSON)
};

function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    for (let tarefa of listaTarefas) {
        criaTafera(tarefa);
    }
    console.log(tarefas)
};

addTarefasSalvas();