//const nome = 'Diogo';
//const sobrenome = 'Dotto';
//
//const falaNome = () => nome + ' ' + sobrenome;
//
////module.exports.nome = nome;
////module.exports.sobrenome = sobrenome;
////module.exports.falaNome = falaNome;
//
//exports.nome = nome;
//exports.sobrenome = sobrenome;
//exports.falaNome = falaNome;
//this.qualquerCoisa = 'O que eu quiser exportar'; // this não é muito usado


class Pessoa {
    constructor (nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;