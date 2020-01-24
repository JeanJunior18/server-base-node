const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars')
const path = require('path')


// Iniciando App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));

// Inciando banco de dados
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blogapp', {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false});

// Models
require('./src/models/Products')
require('./src/models/Postagens')

// Handlebars
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// Rotas

const Routes = require('./src/routes')

app.use('/', Routes)


/*
Se aparecer esse erro:

Error: listen EADDRINUSE :::3300

Mude a porta e tente novamento
*/ 
const PORT = 3302

app.listen(PORT, console.log('http://localhost:'+PORT))