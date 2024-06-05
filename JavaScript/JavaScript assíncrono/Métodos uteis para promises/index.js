function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Bad Value');
                return;
            }

            resolve(msg.toUpperCase() + ' - passei na promise'); //exibido com then()
        }, tempo);
    });
}

/*
Promise.all
Promise.race
Promise.resolve
Promise.reject
*/

const promises = [
    esperaAi('Promise 1', rand(1, 4)),
    esperaAi('Promise 2', rand(1, 4)),
    esperaAi('Promise 3', rand(1, 4)),
    //esperaAi(1000, rand(1, 4)),
];

//Promise.all(promises) // tenta resolver todas as promises, se uma der errado rejeita todas
//    .then(function(valor) {
//        console.log(valor);
//    })
//    .catch(function(err) {
//        console.log(err);
//    })

//Promise.race(promises) //resolve todos os promises, mas entrega a primeira a ser resolvida
//    .then(valor => {
//        console.log(valor);
//    })
//    .catch(err => {
//        console.log(err);
//    })

//function baixaPagina() {
//    const emCache = false;
//
//    if(emCache) {
//        return Promise.resolve('pagina em cache'); //não precisa esperar resdolver, já tem os dados prontos 
//    } else {
//        return esperaAi('Baixei a pagina', 3000);
//    }
//}

function baixaPagina() {
    const emCache = true;
 
    if(emCache) {
        return Promise.reject('Pagina em cache'); // cai no catch
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(err => {
        console.log('ERRO', err)
    });