/*
Definição de prótotipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.
*/
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome; 
};

const pessoa1 = new Pessoa('Diogo', 'Dotto'); // <- pessoa = função contrutora
const pessoa2 = new Pessoa('Rafaela', 'Zwicker'); // <- pessoa = função contrutora
const data = new Date(); // <- função contrutora

console.dir(pessoa1);
console.dir(data);