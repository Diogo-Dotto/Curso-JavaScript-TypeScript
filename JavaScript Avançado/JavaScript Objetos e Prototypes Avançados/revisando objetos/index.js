const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Dotto'    
};
//const chave = 'nome'
//console.log(pessoa['nome']);
//console.log(pessoa[chave]);

// new Object ()
const pessoa1 = new Object();
pessoa1.nome = 'Diogo';
pessoa1.sobrenome = 'Fernando';
pessoa1.idade = 22;
//console.log(pessoa1.nome);
//console.log(pessoa1.sobrenome);
//delete pessoa1.nome;
//console.log(pessoa1);

pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

//console.log(pessoa1.getDataNascimento());
//console.log(pessoa1.falarNome());

//for(let chave in pessoa1) {
//    console.log(pessoa1[chave]);
//}

//factory function / constructor function
function criaPessoa(nome , sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};

//const p1 = criaPessoa('Diogo', 'Fernando');
//console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    Object.freeze(this);

    //return this;
}

// new - cria um objeto vazio {} <- this -> this
const p1 = new Pessoa('Diogo', 'Fernando');
//Object.freeze(p1); // trava o objeto não permitindo alteraçoes
p1.nome = 'Outra coisa' // muda o conteudo pq não é alterado a constante e sim o objeto da função
const p2 = new Pessoa('Rafaela', 'Bellini');
console.log(p1);
console.log(p2);

