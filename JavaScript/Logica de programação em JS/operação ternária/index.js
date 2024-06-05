// (condição) ? 'valor para verdadeiro' : 'valor para falso';

const pontuacaoUsuario = 1111;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário normal';

const corUsuario = 'pink';
const corPadrao = corUsuario || 'Preta';


console.log(nivelUsuario, corPadrao);
