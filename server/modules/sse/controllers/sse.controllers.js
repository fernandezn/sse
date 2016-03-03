'use strict';
var connections = require('../../connections');

var prepareMessage = function (event, message) {
    var data = '';
    if (event) data += 'event: ' + event + '\n';
    if (message) data += 'data: ' + message.split(/\n/).join('\ndata:') + '\n';
    data += '\n';
    return data;
}

// Funcion para Abrir la Conexion SSE
exports.setSSE = function (req, res) {

    if (req.headers.accept == 'text/event-stream') {            
           
        // Seteo la cabecera para para conexiones event-stream
        res.writeHead(200, {
            'Connection': 'keep-alive',
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache'
        });        
        
        // Soporte para Polyfill
        if (req.headers['x-requested-with'] == 'XMLHttpRequest') res.xhr = null;                      
        
        // Guardo la respuestas para poder enviar futuros mensajes
        connections.addConnection(res);
        console.log('Conexiones Actuales: ', connections.getConnections().length);
        
        // Envio la Respuesta del Request
        res.write('\n');
        
        // Cuando se cierra la conexion, la borro del array
        req.on("close", function () {
            connections.removeConnection(res);
            console.log('Conexiones Actuales: ', connections.getConnections().length);
        });

    } else {
        return res.status(504).send("El Cliente no Acepta Eventos");
    }

};

// Funcion para Enviar un Mensaje a todos los clientes conectados
exports.sendSSEMessage = function (req, res) {

    var msg = prepareMessage(undefined, req.body.msg);
    connections.getConnections().forEach(function (connection) {
        connection.write(msg);
    });

    return res.status(200).send("Mensaje Enviado");
};