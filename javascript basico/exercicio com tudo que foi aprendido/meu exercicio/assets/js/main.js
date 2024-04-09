const form = document.querySelector('#formulario');//capturou formulario

form.addEventListener('submit', function (e) { //adicionar evento
    e.preventDefault();//nao deixa formulario ser enviado
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);//pegar o valor de inputPeso e addicionar na const
    const altura = Number(inputAltura.value);//especificando para ser numero - Number

    if (!peso) {//verificação se peso e altura são válidos
        setResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {//verificação se peso e altura são válidos
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`
    setResultado(msg, true);
})

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso' , 'Peso normal', 'Sobrepeso', 'Obesidade grau 1' , 'Obesidade grau 2' , 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 19.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
 
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2); //toFixed - quantos numeros depois do ponto serao exibidos
}

function criaP() {//criar funcoes especificas ajuda a ler o codigo mais facilmente
    const p = document.createElement('p');//criar p
    return p;//retorna p
}

function setResultado(msg, isValid) { //função para exibir resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';//inserir na pagina html
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado'); //adiciona classe no javascript
    } else {
        p.classList.add('bad');//classe usada para modificar no CSS
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

