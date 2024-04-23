// função conhece onde foi declarada
const nome = 'Diogo';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome ="Dotto";
    falaNome();
}
usaFalaNome();
