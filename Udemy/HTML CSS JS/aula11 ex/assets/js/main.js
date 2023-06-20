//capturar o envio de submit do formulário
const form = document.querySelector('#form');

//adcionou o evendo de escutadoer, submit, 
form.addEventListener('submit', function (event) {
    //previniu o default não deixando ele ser enviado
    event.preventDefault();
    //captura dos dados
    const inputPeso = event.target.querySelector("#peso")
    const inputAltura = event.target.querySelector("#altura")
    //conversao de dados
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //caso seja um NaN tem as condições 
    if (!peso) {
        //seta o resultado com invalido e a flag false 
        setResultado("Peso inválido", false);
        return;
    }
    if (!altura) {
        setResultado("Altura inválida", false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);

    const msg = `Seu IMC é ${imc} (${nivelIMC})`;
    console.log(msg)
    //setou o resultado com a msg vindo corretamente e a flag true
    setResultado(msg, true)
});

function getIMC(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2);
};

function getNivelIMC(imc) {
    const nivel = ['Abaixo do Peso', ' Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
};

//função para criar paragrafo
function criaP() {
    //criando o paragrafo
    const p = document.createElement('p');
    return p;
};

//função para adcionar alguma coisa ao resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = ``;
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    }
    else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    //adicionar a constante p ao resultado
    resultado.appendChild(p);
};