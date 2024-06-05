//defineProperty -> Getter e Setter
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // pode apagar a chave, pode reconfigurar a chave
        get: function () { //só pega e mostra o valor
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Caracter não válido');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 43;
//console.log(p1);
console.log(p1.estoque);
