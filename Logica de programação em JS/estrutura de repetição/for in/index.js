//for in -> lê os indices ou chaves do objeto

//                1       2       3
//const frutas = ['Pera', 'Maçã', 'Uva'];

//for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i]);
//}

//       nome personalizado para i
//for (let indice in frutas) {
//    console.log(frutas[indice])
//}

const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Dotto',
    idade: 22
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

