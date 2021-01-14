var app = angular.module('app',[]);
app.controller('emp', ['$scope', function($scope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;
    $scope.d = 4;

    $scope.updateC = function(){
        $scope.c = $scope.a * 2;
    }
    //Manual watcher
    $scope.$watch("c", function(newValue, oldValue){
        if(newValue != oldValue)
            console.log("Updated C to: "+newValue);
    })
}]);