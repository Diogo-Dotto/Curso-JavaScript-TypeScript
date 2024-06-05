//Filter - filtra array - Sempre retornar um array com a mesma quantidade de elementos ou menos

//retorne numeros maiores que 10
const num = [5, 50, 80 ,1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numFilter = num.filter(valor => valor > 10);
//console.log(numFilter);

//retorne as pessoas que tem o nome com 5 letras ou mais 
//retorne as pessoas com mais de 50 anos 
//retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 },
];

const nome5 = pessoas.filter(obj => obj.nome.length >= 5);
//console.log(nome5);

const mais50 = pessoas.filter(obj => obj.idade > 50);
//console.log(mais50);

const terminaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
//console.log(terminaA);
