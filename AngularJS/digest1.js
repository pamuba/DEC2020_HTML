var app = angular.module('app',[]);
app.controller('emp', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.s = 0;

    $scope.calSum = function(){
        $scope.s = Number($scope.a) + Number($scope.b);
    }

}]);

var btnClick = function(){
    var $scope = angular.element($('#div1')).scope();

    // $scope.s =  Number($scope.a) + Number($scope.b);
    // //Invoking the digest process from outside the angular context
    // $scope.$apply();
    
    $scope.$apply(function(){
        $scope.s = Number($scope.a) + Number($scope.b);
    });
}