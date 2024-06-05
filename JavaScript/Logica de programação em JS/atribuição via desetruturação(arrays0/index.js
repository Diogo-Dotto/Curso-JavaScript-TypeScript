//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const [um, dois, tres, ...resto] = numeros;
//... rest, ... spread
//console.log(resto);
//const [um, , tres, , cinco, , sete] = numeros;
//pula indexes de array


//console.log(numeros[1][2]);
//                    1          2          3
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3]= numeros;
//      1 2 3, 4 5 6,  7 8 9
console.log(lista3[2])//acessa lista 3 index 2 = 9
