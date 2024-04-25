//negativos      -5         -4         -3        -2         -1
// positivo       0          1          2         3          4
const nomes = ['Diogo' , 'Fernando', 'Dotto', 'Rafaela', 'Bellini'];

// nomes.splice(0, delete, elem1, elem2, elem3);
// primeiro parametro é de qual indice quero selecionar
// segundo parametro é quaantos eu quero deletar
// e o terceiro é quais e quantos elementos quero adicionar

// pop
//const removidos = nomes.splice(-1, 1);// (4, 1)remove do indice 4 um elemento
//console.log(nomes, removidos);
//console.log(Number.MAX_VALUE)

//shift
//const removidos = nomes.splice(0, 1);//seleciona e remove o primeiro elemento
//(4, 0 , 'Zwicker'), adiciona depois do indice 4 o elemento 'Zwicker'
//console.log(nomes, removidos);

//push
//const push = nomes.splice(nomes.length, 0, 'Athena',  'Apollo');//variavel.length para adicionar elementos
//console.log(nomes);

//unshift
const unshift = nomes.splice(0, 0, 'Apollo')//
console.log(nomes);