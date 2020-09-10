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
const bodyParser = require('body-parser');
const Post = require('./models/Post');

//Config 
    //Template Engine
app.engine('handlebars', handlebars({
    defaultLayout: 'main'}
 ));
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



//Rotas 
app.get('/cad', (req, res) => {    
    res.render('formulario');
});

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()=>{
        res.send('Post criado com sucesso!');
    }).catch((error)=>{
        res.send(`Houve um erro: ${error}`);
    })
});

//última linha
app.listen(3002, () =>{ 
        return console.log("Servidor executando na porta 3002!");
    }
); 
