function Soma(x = 2, y = 3) {
    const resultado = x + y;
    return resultado;
}

console.log(Soma(5, 3));

const resultado = Soma(2, 8);
console.log(resultado);

console.log(Soma());

const raiz = function(n) {
    return n ** 0.5;
};

console.log('\n', raiz(121));