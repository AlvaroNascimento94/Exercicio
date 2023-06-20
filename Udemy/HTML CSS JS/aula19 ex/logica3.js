/* escrava uma função que recebe um numero e retorne o sgeuinte:
divisível por 3 = Fizz
divisível por 5 = Buzz
divisível por 3 e 5 = FizzBuzz
não divisivel por 3 e 5 = retorne o numero
checar se é realmente um numero 
use de 0 a 100
 */

function numero (n){
    if (typeof n !== 'number') return n;
    if (n % 3 ===0  && n % 5===0) return 'FizzBuzz';  
    if (n % 3 ===0) return 'Fizz';
    if (n % 5 ===0) return 'buzz';
    return n;
    
}
for (let i = 0; i <= 100; i++) {
    console.log(i, numero(i))
}