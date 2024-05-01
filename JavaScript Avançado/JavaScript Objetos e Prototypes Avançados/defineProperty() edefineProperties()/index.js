//defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;
    //this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // define o valor da chave
        writable: true, // pode alterar o valor 
        configurable: true, // pode apagar a chave, pode reconfigurar a chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // define o valor da chave
            writable: true, // pode alterar o valor 
            configurable: true, // pode apagar a chave, pode reconfigurar a chave
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // define o valor da chave
            writable: true, // pode alterar o valor 
            configurable: true, // pode apagar a chave, pode reconfigurar a chave
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 21000;
//delete p1.estoque;
//console.log(p1)

console.log(p1);

for (let chave in p1) {
    console.log(chave);
}