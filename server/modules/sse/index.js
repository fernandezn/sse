var express = require('express');
var router = express.Router();

// Controllers
var sseCtrl = require('./controllers/sse.controllers.js');

// Defino las rutas y controllers del modulo sse
module.exports = function(app){
  
    router.route('/events').get(sseCtrl.setSSE);
    router.route('/message').post(sseCtrl.sendSSEMessage);
    app.use(router); 
    
};