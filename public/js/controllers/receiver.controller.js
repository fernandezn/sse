angular.module('sse').controller('ReceiversCtrl',['$scope', function($scope){
    
    // Inicializo los mensajes
    $scope.messages = [];
    
    // Funcion para la Apertura y Cierre de la Conexion
    var connectionOpen = function(open){
        console.log((open == true) ? 'Conexión Establecida' : 'Conexion Terminada');
    };
    
    // Funcion para recibir los mensajes del Servidor
    var addMessage = function(message){
        $scope.$apply( function() { $scope.messages.push(message); });
    }
    
    // Establezco la Conexion para Escuchar los Eventos del Servidor
    window.source = new EventSource('/events');
    window.source.addEventListener('open', function () { connectionOpen(true); }, false);
    window.source.addEventListener('error', function () { connectionOpen(false); }, false);
    window.source.addEventListener('message', function(event) { addMessage(event.data) }, false);
    
}]);