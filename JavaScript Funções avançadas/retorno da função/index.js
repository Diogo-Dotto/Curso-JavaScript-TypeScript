// return
// retorna um valor 
// termina a função
//function soma(a, b) {
//    return a+ b;
//}
//
//console.log(soma(2, 5));
//
//function soma2(a, b) {
//    console.log(a + b);
//}
//
//soma2(5, 2)

//function criaPessoa(nome, sobrenome) {
//    return {nome, sobrenome}
//}
//
//p2 é a mesma coisa que p1, só que p1 tem uma função que cria objetos
//const p1 = criaPessoa('Diogo', 'Dotto')
//const p2 = {
//    nome: 'Diogo',
//    sobrenome: 'Dotto'
//};
//
//console.log(typeof p1);
//console.log(typeof p2);

//function falaFrase(comeco) {
//    function falaResto(resto) {
//        return comeco + ' ' +resto;
//    }
//    return falaResto;
//}
//
//const fala = falaFrase('olá');
//const resto = fala('mundo');
//console.log(resto);

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));
