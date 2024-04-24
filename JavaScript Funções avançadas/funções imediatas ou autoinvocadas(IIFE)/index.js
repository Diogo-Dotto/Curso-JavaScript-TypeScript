//IIFE - Immediately Invoked Function Expression - criar função dentro de parenteses e usar 
//parenteses para invocá-la log em seguida
(function(idade, peso, altura) {
    

    const sobrenome = 'Dotto';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Diogo'));
    }

    falaNome();
    console.log(idade, peso, altura)
})(22, 110, 1.78); 
//paresteses de invocação servem para declarar parametros