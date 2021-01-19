var app = angular.module("app",[]);
app.controller('emp', ['$scope','calcFactory' , function($scope, calcFactory){
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function(){
        // $scope.sum = parseInt($scope.a) + parseInt($scope.b);
        $scope.sum = calcFactory.getSum($scope.a, $scope.b, function(r){
            $scope.sum = r;
        });
    }
}]);

app.factory('calcFactory', ['$http','$log', function($http, $log){
    var oCalcService = {};
    oCalcService.getSum = function(a,b, cb){
        var s =  parseInt(a) + parseInt(b);
        cb(s);
    };
    return oCalcService;
}])