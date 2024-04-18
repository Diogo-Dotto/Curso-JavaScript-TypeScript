const paragrafos = document.querySelector('.paragrafos');
//selecionar todos itens dentro de uma 'div'
const ps = paragrafos.querySelectorAll('p');

//capturar estilo css no js
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps){
    //Adicionar estilo via js
    p.style.backgroundColor = backgroundColorBody;
    //cor usar hexadecimal
    p.style.color = '#FFFFFF'
}