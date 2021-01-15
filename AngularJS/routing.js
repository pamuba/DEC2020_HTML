var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/first-msg', {
        // template:"<b>This is a message from First</b>"
        templateUrl:'msg1.html',
        controller:'message1'
    })
    .when('/second-msg', {
        templateUrl:'msg2.html',
        controller:'message2'
    })
    .when('/', {
        template:"<b>This is the dafault View</b>"
    })
    .otherwise({
        // template: "<b>No Content</b>"
        redirectTo: function(){
            alert("Sorry");
            return "/second-msg";
        }
    })
}]);

app.controller('message1', ['$scope', function($scope){
    $scope.a = 10;
    $scope.b = 20;
}])
app.controller('message2', ['$scope', function($scope){
    $scope.c = 30;
    $scope.d = 40;
}])