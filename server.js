const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.status(200).send({message: 'Olá, estou funcionando'});
})

app.get('/ola', (req, res) =>{
    res.status(200).send({message: 'oi, eu sou a rota olá'});
})

app.listen(3001, () =>{

            console.log('api rodando na porta 3001');
})
