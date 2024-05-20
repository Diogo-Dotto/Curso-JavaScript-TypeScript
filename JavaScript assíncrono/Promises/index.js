function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { //criando promisses
        if(typeof msg !== 'string') reject('Bad Value') //reject cai no catch
        
        setTimeout(() => {
            resolve(msg); //exibido com then()
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibindo dados na tela')
    })
    .catch(e => {
        console.log('Error:', e);
    })