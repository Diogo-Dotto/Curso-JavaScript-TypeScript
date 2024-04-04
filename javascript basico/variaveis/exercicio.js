const nome = 'Diogo Fernando';
const sobrenome = 'Dotto';
const idade = 22;
const peso = 110;
const alturaEmCm = 1.78;
let imc;
let anoNascimento;

imc = (peso / alturaEmCm) / alturaEmCm;
anoNascimento = 2023 - idade;

//template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg.`);
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);