/* Servidor web criado sem express
const http = require('http');

http.createServer(function(req, res) {
    res.end("Olá mundo");
}).listen(3002);
*/

//Usando Express
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", (req, res) => {
    res.send("Bem-vindo ao meu blog!");
});

app.get("/ola/:nome/:cargo/:cor", (req, res) => {
    res.send(`<h2>Ola ${req.params.nome},
    você é o novo ${req.params.cargo} e 
    sua cor favorita é ${req.params.cor}</h2>`);
});

app.listen(3002, () =>{ 
    return console.log("Servidor executando!");
}); //última linha
