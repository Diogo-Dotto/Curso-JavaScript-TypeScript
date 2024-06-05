//const nome = 'Diogo Dotto';

const nomes = ['Diogo', 'Rafaela', 'Apollo']

//for clássico - geralmente com iteráveis (arrays ou strings)
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('###');

//for in - Retorna indice ou chaves (strings, arrays ou objetos)
for (let i in nomes) {
        console.log(nomes[i]);
}

console.log('###');

//for of - Retorna o valor em si (iteraveis, arrays ou strings)
for (let valor of nomes) {
    console.log(valor);
}
