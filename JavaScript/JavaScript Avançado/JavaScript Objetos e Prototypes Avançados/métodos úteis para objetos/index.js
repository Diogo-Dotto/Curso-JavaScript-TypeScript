const produto = { nome: 'Produto', preco: 1.8, material: 'Porcelana' };

//Spread - copia
//const caneca = {
//    ...produto,
//    material: 'porcelana'
//}; // ... - spread - copia objetos em outra variável 

//caneca.nome = 'Outro nome';
//caneca.preco = 2.5;
//
//console.log(produto);
//console.log(caneca);

//assign - outro metodo de copia
//const caneca = Object.assign({}, produto, {material: 'Porcelana'})
//caneca.nome = 'Outro nome';
//caneca.preco = 2.5;
//
//console.log(produto);
//console.log(caneca);

//getOwnPropertyDescriptor
//Object.defineProperty(produto, 'nome', {
//    writable: false,
//    configurable: false,
//    value: 'Qualquer outra coisa'
//})
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
//console.log(produto)

//values - pega somente os valores dentro do objeto
//console.log(Object.values(produto))

//entries - lê values e keys juntos em arrays
//console.log(Object.entries(produto))

for(let valor of Object.entries(produto)) [
    console.log(valor[0], valor[1])
]