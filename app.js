var express    = require('express');
var bodyParser = require('body-parser');
var path       = require('path');
var router     = express.Router();

// Inicio Servidor y Asigno Middlewares
var app = express();
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// Sirvo archivos estaticos
app.use(express.static(path.resolve('./public')));

// Inicializo los Modulos
require('./server/modules/sse')(app);

// Inicio el Servidor
app.listen(3000,function(){
    console.log('Servidor Iniciado...');
    console.log('Ingresa a http://localhost:3000/sender Para Enviar Mensajes');
    console.log('Ingrese a http://localhost:3000/receiver Para Ver los Mensajes Enviados');
});
