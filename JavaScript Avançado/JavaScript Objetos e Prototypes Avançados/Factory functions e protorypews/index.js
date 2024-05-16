const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`)
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

const pessoasPrototypes = {...falar, ...comer, ...beber};
//ou
//const pessoasPrototypes = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoasPrototypes, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Diogo', 'Dotto');
const p2 = criaPessoa('Rafaela', 'Dotto');
console.log(p1);
console.log(p2);