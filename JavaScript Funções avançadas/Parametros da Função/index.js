// argumentos que sustenta totos os argumentos enviados
//function funcao(a, b, c) {
//    let total = 0;
//    for (argumento of arguments) {
//        total += argumento;
//    }
//
//    console.log(total, a, b, c);
//}
//funcao(1, 2, 3, 4, 5, 6, 7);

//function funcao([{nome , sobrenome , idade}]) {
//    console.log(nome, sobrenome, idade);
//}
//
//let obj = {nome: 'Diogo', sobrenome:'Dotto', idade: 22};
//funcao(obj);


//function funcao([valor1, valor2, valor3]) {
//    console.log(valor1, valor2, valor3);
//}
//
//
//funcao(['Diogo Fernando', 'Dotto', 22]);

//                                  rest deve ser o ultimo parametro da função
const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros){
       if (operador === '+')acumulador += numero;
       if (operador === '-')acumulador -= numero;
       if (operador === '*')acumulador *= numero;
       if (operador === '/')acumulador /= numero;
    }
    console.log(acumulador);
};
// operador, acumulador, ...numeros
conta('+', 1, 20, 30, 40, 50);

