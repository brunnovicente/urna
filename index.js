const express = require('express');
const servidor = express()
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

////////////////////
//CONFIGURAÇÕES
////////////////////
//Template Engine
servidor.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
servidor.set('view engine', 'handlebars');

//Body Parser
servidor.use(bodyParser.urlencoded({ extended: false }));
servidor.use(bodyParser.json());

//Pasta de Arquivos Estásticos
servidor.use(express.static(path.join(__dirname, 'public')));

///////////////////
//ROTAS DO SISTEMA
///////////////////
servidor.get('/', (req, res) => {
    res.send('Página Inicial truando...')
})

const principal = require('./routes/principal');
servidor.use('/principal', principal);

servidor.listen(3030, ()=>{
    console.log("Servidor rodando em : http://localhost:3030");
})
