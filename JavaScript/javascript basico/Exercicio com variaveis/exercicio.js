/* Criar 3 variaveis A, B e C com seus valores sendo seus nomes
valor de A aponte para valor de B, valor de B aponte para C e C aponte para A*/

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA] //Faz a troca sem necessidade de criacao de outra variavel

console.log(varA, varB, varC);