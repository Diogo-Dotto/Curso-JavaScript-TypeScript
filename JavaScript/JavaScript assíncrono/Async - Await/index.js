function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { //criando promisses
        if (typeof msg !== 'string') reject('Bad Value') //reject cai no catch

        setTimeout(() => {
            resolve(msg + ' - Passei na Promise'); //exibido com then()
        }, tempo);
    });
}

//esperaAi('Fase 1', rand(0, 3))
//    .then(valor => {
//        console.log(valor);
//        return esperaAi('Fase 2', rand(0, 3));
//    })
//    .then(valor => {
//        console.log(valor);
//        return esperaAi('Fase 3', rand(0, 3));
//    })
//    .then(valor => {
//        console.log(valor);
//        return valor
//    })
//    .then(valor => {
//        console.log('Terminamos na fase: ', valor)
//    })
//    .catch(e => console.log(e))


//Async e await só podem ser criadas com funçao
async function executa() {
    try {
        const fase1 =  esperaAi('Fase 1', rand(0, 3));
        console.log(fase1);

        setTimeout(() => {
            console.log('Essa Promise estava pendente', fase1)
        }, 1100);

        const fase2 = await esperaAi('Fase 2', rand(0, 3));
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand(0, 3));
        console.log(fase3);

        console.log('terminamos na: ', fase3)
    } catch (err) {
        console.log(err)
    }
}

executa();

/*as promises tem 3 estados
1 - pending/pendente 
2 - fulfilled/sucesso
3 - reject/fracasso
*/
