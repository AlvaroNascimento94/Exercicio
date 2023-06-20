// escreva uma função que receba dois numeros e retorne o maior

/* function maior(min, max){
    let maior = 0;
    if (min < max){
        maior= max;
    }
    else{
        maior = min;
    }

    return maior; 
} */

function max(x, y) {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}

//aplicando condição ternaria:
function maior(x, y) {
    //condição ? verdadeiro : falso
    return x > y ? x : y;
}

//arrow function
const max2 = (x, y) => x > y ? x : y;

console.log(max(5, 9));