// Valor por referência
//                 0          1          2
//const nomes = ['Diogo', 'Rafaela', 'Apollo'];
// String, Objetos, Funções, Numeros
//nomes[2] = 'Athena';
//delete nomes[2];
//console.log(nomes)

//const nomes = ['Diogo', 'Rafaela', 'Apollo'];
//const novo = [...nomes]; //copia de arrays 
//
//novo.pop();
//console.log(nomes);
//console.log(novo);

//const nomes = ['Diogo', 'Rafaela', 'Apollo'];
//console.log(nomes.length); //quantidade de elementos.lenght

//const nomes = ['Diogo', 'Rafaela', 'Apollo'];
//const removido = nomes.pop();//remove e retorna ultimo elemento
//console.log(nomes, removido);

//const nomes = ['Diogo', 'Rafaela', 'Apollo'];
//const remove = nomes.shift();//remove e retorna o primeiro elemento
//console.log(nomes, remove)

//const nomes = ['Diogo', 'Rafaela', 'Apollo'];
//nomes.push('Athena'); //Adiciona um elemento no final do array
//console.log(nomes);

//const nomes = ['Diogo', 'Rafaela', 'Apollo'];
//nomes.unshift('Athena');//Adiciona elemento no inicio do array
//console.log(nomes);

//const nomes = ['Diogo', 'Rafaela', 'Apollo', 'Athena', 'Juarez'];
//const novo = nomes.slice(1, -2);//escolhe elementos 
//console.log(novo);

//const nome = 'Diogo Fernando Dotto';
//const nomes = nome.split(' ');//transformar uma String em Array('metodo de separação')
//console.log(nomes)

const nomes = [ 'Diogo', 'Fernando', 'Dotto' ];
const nome = nomes.join(' ');// uni os elemensto do array em uma string('metodo de união)
console.log(nome);