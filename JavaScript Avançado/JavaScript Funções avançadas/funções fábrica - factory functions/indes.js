//Factory Function - Função fábrica
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor)
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`;
        },

        altura,
        peso,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        },
        //

    };
}

const p1 = criaPessoa('Diogo', 'Dotto', 1.78, 110);
const p2 = criaPessoa('Rafaela', 'Dotto', 1.78, 76);
const p3 = criaPessoa('Apollo', 'Dotto', 1.80, 85);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
