//Mesma regras do let
//Somente nao é possivel modificar o valor de uma constante
//Deve ser declarado valor no momento da criação

//const nome = 'Diogo';

//Dentro de '' = String | fora de '' = Number
const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;

console.log(resultaDuplicado);


let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);

console.log(typeof primeiroNumero);// typeof variavel para descobrir o tipo: String ou Number

console.log(primeiroNumero + segundoNumero);//Junção de string + number = ocorre a concatenação = 510 = 5=String | 10=Number