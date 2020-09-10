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
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


const bodyParser = require('body-parser');

//Variável de conexao com o banco de dados
const Post = require('./models/Post');

//Config 
    //Template Engine
app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)}
 ));
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Rotas
app.get('/', (req, res) => {
    Post.findAll({order: [['id', 'ASC']]}).then((params) => {
       res.render('home', { params: params })
    })
});


app.get('/cad', (req, res) => {    
    res.render('formulario');
});

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()=>{
        res.redirect('/');
    }).catch((error)=>{
        res.send(`Houve um erro: ${error}`);
    })
});

app.get('/deletar/:id', (req, res)=> {
    Post.destroy({where: {'id': req.params.id}}).then(()=>{
        res.redirect('/');
    }).catch((error)=>{
        res.send(`Postagem inexistende ${error}`);
    })
});

//última linha
app.listen(3002, () =>{ 
        return console.log("Servidor executando na porta 3002!");
    }
); 
