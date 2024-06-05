const numeros = [1, 2, 3, 4, 5 ,6, 7, 8, 9];

//for (let i of numeros) {
//    let numero = numeros[i];
//
//    if (numero === 2) {
//        console.log('pulei o numero 2');
//        continue;//encontra e pula, e continua
//    }
//
//    if (numero === 7){
//        console.log('7 encontrado, saindo...')
//        break;//encontra e para o laço
//    }
//
//    console.log(numero);
//}

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o 2');
        i++;
        continue;
    }

    console.log(numero);
    
    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        i++;
        break;
    }

    i++;
}