//some todos os numeros (reduce)
//retorne um arrau com os pares (filter)
//retorne um array com o dorbo de valores (map)
//função reduce é retornar 1 valor de todo um array

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = num.reduce((acumulador, valor, indice, array) => {
    return acumulador += valor;
}, 0);
//console.log(total)

//não aconselhavel fazer isso com reduce
//const total = num.reduce((acumulador, valor) => {
//    if (valor % 2 === 0) acumulador.push(valor);
//    return acumulador;
//}, [])

///não aconselhavel com reduce
//const total = num.reduce((acumulador, valor) => {
//    acumulador.push(valor * 2);
//    return acumulador;
//}, [])

//retorne a pessoa mais velha 
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 105 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 },
];
const velha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(velha);