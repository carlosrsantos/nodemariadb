/* Servidor web criado sem express
const http = require('http');

http.createServer(function(req, res) {
    res.end("Olá mundo");
}).listen(3002);
*/

//Usando Express
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//Config 
    //Template Engine
app.engine('handlebars', handlebars({
    defaultLayout: 'main'}
 ));
app.set('view engine', 'handlebars');

//Conexão com o banco de dados MySQL
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: "localhost",
    dialect: 'mariadb'
});

//Rotas 
app.get('/cad', (req, res) => {    
    res.render('formulario');
});

app.post('/add', (req, res) => {
    res.send('Formulário Recebido!');
});

//última linha
app.listen(3002, () =>{ 
        return console.log("Servidor executando na porta 3002!");
    }
); 
