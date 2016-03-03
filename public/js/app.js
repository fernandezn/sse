var sseModule = angular.module('sse',['ngRoute']);

// Configuracion de Rutas
sseModule.config(['$routeProvider',function($routeProvider){
    
    $routeProvider.when('/senders', {
        templateUrl: 'templates/senders.html',
        controller: 'SendersCtrl'
    }).
    when('/receivers', {
        templateUrl: 'templates/receivers.html',
        controller: 'ReceiversCtrl'
    }).
    otherwise({
        redirectTo: '/receivers'
    });    
    
}]);