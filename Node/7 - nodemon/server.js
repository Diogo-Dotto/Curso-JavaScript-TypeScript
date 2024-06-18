const express = require('express');
const app = express();

//       CRIAR   LER  ATUALIZAR APAGAR
//CRUD - CREATE, READ, UPDATE,  DELETE
//        POST   GET    PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/contato', (req, res) => {
    res.send('Obigado pro entrar em contato conosco, aguardo a aprovação da proposta')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});


