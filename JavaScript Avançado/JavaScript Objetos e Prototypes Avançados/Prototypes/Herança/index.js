// Produto -> aumento e desconto
// Camiseta = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome , preco);
    this.cor = cor;
}

//Linka Prototypes de outras funcões construtoras a outra função
Camiseta.prototype = Object.create(Produto.prototype);
//transforma uma função, em função contrutora
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (perc) {
    this.preco = this.preco + (this.preco * (perc / 100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        Enumerable : true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function() {
            if (typeof valor !== 'Number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(100);
console.log(camiseta);
console.log(produto)

const caneca = new Caneca('Caneca de café', 12, 'Porcelana', 10);
caneca.estoque = 100;
console.log(caneca, caneca.estoque);