//const h1 = document.querySelector('.container h1')
const h1 = document.getElementById('h1')
const data = new Date()
h1.innerHTML = criarData(data);

function getSemana(data) {
    let semana = ["Domingo", 'Segunda-feira', "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", 'Sabado']
    return semana[data]
}

function getMes(mes) {
    let nomeMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'
        ,'Agosto','Setembro', 'Outurbo','Novembro','Dezembro']
        return nomeMes[mes]
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criarData(data) {
    const numeroSemana = data.getDay();
    const numeroMes = data.getMonth();

    const semana = getSemana(numeroSemana);
    const mes = getMes(numeroMes);

    //console.log( `${semana}, ${data.getDate()} de ${mes} de ${data.getFullYear()}, ${data.getHours()}:${data.getMinutes()}`)
    return (
        `${semana}, ${data.getDate()} de ${mes} de ${data.getFullYear()}, ` +
        `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
    );

}

/* const h1 = document.getElementById('h1')
const data = new Date()
h1.innerHTML = criarData(data);
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes); */