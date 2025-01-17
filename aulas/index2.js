const express = require('express');

const server = express();


server.get("/hello", (req, res) => {
    const {nome, idade, cargo} = req.query;


    return res.json({
        title: "Hello world",
        message: `eu sou ${nome} e tenho ${idade} anos e trabalho como ${cargo} na empresa octadroid `,
        
    });
});

server.get("/hello/:nome", (req, res) => {
    const {nome, idade, cargo} = req.params;

    return res.json({
        title: "Hello World",
        message: `olá ${nome} tudo bem!?`
    });
});

server.listen(3000);