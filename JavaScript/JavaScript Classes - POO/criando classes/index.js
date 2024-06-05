class Pessoa {
    constructor(nome, sobrenome) { //criação de metodo
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { // são linkados diretamente no protoype
        console.log(`${this.nome} está falando.`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}

const p1 = new Pessoa('Diogo', 'Dotto');
const p2 = new Pessoa2('Rafaela', 'Bellini');

console.log(p1);
console.log(p2);
