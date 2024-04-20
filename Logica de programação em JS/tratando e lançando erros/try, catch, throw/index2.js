//try {
//    //console.log(a);
//    console.log('Abri um arquivo');
//    console.log('Manipulei o arquivo e gerou um erro');
//    console.log('Fechei o arquivo');
//    //executada quando não há erros
//
//    try {
//        console.log(b);
//    } catch (err) {
//    console.log('Deu erro');
//    //é executada quando há erros
//    } finally {
//        console.log('Também sou finnaly');
//    }
//
//} catch (err) {
//    console.log('Tratando o erro');
//} finally {
//    console.log('FINALLY: Eu sou sempre executado');
//    //sempre
//}


function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instãcia de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
} catch (err) {

} finally {
    console.log('Tenha um bom dia')
}
