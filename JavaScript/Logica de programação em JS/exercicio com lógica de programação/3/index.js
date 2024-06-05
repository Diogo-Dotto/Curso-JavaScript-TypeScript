/*
    Escreva uma função que recebe um número e retorne o seguinte:
    Número é divisível por 3 = Fizz
    Número é divisível por 5 = Buzz
    Número é divisível por 3 e por 5 = retorne FizzBuzz
    Número náo é divisível por 3 e por 5 = retorna o proprio número
    checar se o numero é realmente um numero
    usar função com números de 0 a 100
*/

function fizzBuzz(number) {
    if (typeof number !== 'number') return;
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if (number % 3 === 0)  return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number;
}

console.log('a', fizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}