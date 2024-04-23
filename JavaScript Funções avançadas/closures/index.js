// relacionado ao escopo léxico
function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Diogo');
const funcao2 = retornaFuncao('Rafaela');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());