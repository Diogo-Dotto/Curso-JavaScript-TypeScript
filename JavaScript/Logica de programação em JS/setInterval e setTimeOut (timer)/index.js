function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR' ,{
        hour12: false
    });
}

//seta um intervalo de tempo de atualização
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000)

setTimeout(function() {
    clearInterval(timer);
}, 3000 )

setTimeout(function(){
    console.log('olá mundo!')
}, 5000)