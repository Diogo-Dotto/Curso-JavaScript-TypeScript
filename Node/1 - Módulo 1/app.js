//const mod1 = require('./mod1');
//const falaNome = mod1.falaNome;

//const { nome, sobrenome, falaNome} = require('./mod1');
//
//console.log(nome, sobrenome)
//console.log(falaNome())


const path = require('path');
const axios = require('axios')
const { Pessoa } = require('./mod1');

axios('https://pokeapi.co/api/v2/pokemon/')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));