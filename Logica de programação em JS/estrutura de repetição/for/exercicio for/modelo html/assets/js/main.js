const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const resultado = document.querySelector('.container');

for (let i = 0; i <= 3; i++) {
    let {tag, texto} = elementos[i];
    resultado.innerHTML += `<${tag}> ${texto} </${tag}>`;
}