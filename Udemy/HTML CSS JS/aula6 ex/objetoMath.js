let num1 = Number(prompt("Digite um numero:"));

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto")

//modificar o elemento interno das tag, nesse caso

numeroTitulo.innerHTML = num1

texto.innerHTML = `<p>A raiz quadradada é ${num1 ** (1 / 2)} </p>`
texto.innerHTML += `<p>${num1} é um inteiro? ${Number.isInteger(num1)} </p>`
texto.innerHTML += `<p>${num1} é um NaN: ${Number.isNaN(num1)}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num1)} </p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num1)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${num1.toFixed(2)} </p>`

