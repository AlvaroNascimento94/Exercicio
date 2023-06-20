function criarSegundos(segundos) {
    //pq a data é em milisegundos
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC'
    })
}

let segundos = 0;
let timer;
function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = criarSegundos(segundos);
    }, 1000)
}
const relogio = document.querySelector('.relogio');
/*const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    //para garantir q não tenha nenhuma variavel rodando
    clearInterval(timer);
    iniciaRelogio();
})

pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado')
    clearInterval(timer)
})

zerar.addEventListener('click', function (event) {
    //para limpar a função
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0;
}) */

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
        clearInterval(timer)
        relogio.classList.remove('pausado');
        relogio.innerHTML = '00:00:00'
        segundos = 0;
    }

    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        clearInterval(timer)
    }

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        //para garantir q não tenha nenhuma variavel rodando
        clearInterval(timer);
        iniciaRelogio();
    }
})