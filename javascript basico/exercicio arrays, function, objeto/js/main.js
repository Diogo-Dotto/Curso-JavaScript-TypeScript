function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    /*form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
    };*/

    const pessoas = []; // array criado para guardar informacoes

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');//captacao de informçoes
        const sobrenome = form.querySelector('.sobrenome');//captacao de informçoes
        const peso = form.querySelector('.peso');//captacao de informçoes
        const altura = form.querySelector('.altura');//captacao de informçoes
        console.log(nome, sobrenome, peso, altura);

        pessoas.push({//informacoes sendo guardadas na funçao
            nome: nome.value,//informacoes sendo guardadas na funçao
            sobrenome: sobrenome.value,//informacoes sendo guardadas na funçao
            peso: peso.value,//informacoes sendo guardadas na funçao
            altura: altura.value//informacoes sendo guardadas na funçao
        });

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
