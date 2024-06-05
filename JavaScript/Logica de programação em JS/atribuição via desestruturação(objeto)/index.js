const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Dotto',
    idade: 22,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação
//const { nome, sobrenome } = pessoa;
const {nome, sobrenome, ...resto}= pessoa;

console.log(nome);
console.log(resto);