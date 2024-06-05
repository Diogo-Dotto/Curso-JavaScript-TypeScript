//const tresHoras = 60 * 60 * 3 *1000; // 3 horas 
//const umDia = 60 * 60 * 24 * 1000; // 1 dia 
//const data = new Date(0 + tresHoras - umDia); //função //consultora começa com new e a primeira letra maiuscula - //epoca unix
//console.log(data.toString());

//                    ano,mes,dia,hora,min,seg, ms
//const data = new Date(2024, 3, 10, 20, 54, 30, 1000);

//const data = new Date(1712793844000);//formato mais //utilizado00
//
//console.log('Dia', data.getDate());
//console.log('Mês', data.getMonth() + 1); //mês começa do 0
//console.log('Ano', data.getFullYear());
//console.log('Hora', data.getHours());
//console.log('Min', data.getMinutes());
//console.log('Seg', data.getSeconds());
//console.log('Ms', data.getMilliseconds());
//console.log('Dia semana', data.getDay());//0 - domingo, 6 //- sábado
//console.log(data.toString());
//console.log(Date.now());//em milesimos de segundos


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);