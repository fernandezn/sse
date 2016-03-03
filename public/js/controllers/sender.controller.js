angular.module('sse').controller('SendersCtrl',['$scope','$http', function($scope,$http){
    
    $scope.sendMessage = function(form){        
        
        var body = { msg : $scope.mensaje };
        
        $http({
            method: 'POST',
            url: '/message',
            data: body
        }).then(function(response) {
            console.log(response);
        }, function(error) {
            console.log(error);
        });        
    }
    
}]);