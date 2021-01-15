var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/sumurl/:a/:b', {
        templateUrl: 'sumurl.html',
        controller:'sumurl'
    })
    .when('/suminput', {
        templateUrl: 'suminput.html',
        controller:'suminput'
    })
    .when('/', {
         template:"<b>Click on the Links</b>"
    })
    
    .otherwise({
        template: "<b>No Content</b>"
    })
}]);


app.controller('sumurl', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
})

app.controller('suminput', function($scope, $location , $interpolate,$routeParams){
    $scope.a = 0;
    $scope.b = 0;

    $scope.doSum = function(){
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope)
        //clg(url)
        $location.path(url);
    }
})