const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilos = getComputedStyle(document.body)
const backColor = estilos.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor= backColor
    p.style.color = 'white'
}