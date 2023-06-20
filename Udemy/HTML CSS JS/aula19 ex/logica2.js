/* escreva uma função ePaisagem que recebe dois argumentos,
altura e largurade uma imagem(number). 
returne true se tiver no modo paisagem */

function ePaisagem(largura, altura) {
    return altura < largura ? true : false;
    /* como ja tou fazendo um return de verdadeiro ou falso, so basta a condição
    return altura<paisagem; */
}

//arrow function
const paisagem = (largura, altura) => largura > altura 

    console.log(paisagem(10, 20))