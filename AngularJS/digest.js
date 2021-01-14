var app = angular.module('app',[]);
app.controller('emp', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;
 
    $scope.$watch("a", function(newVal,oldVal){
        if(newVal != oldVal)
            console.log("a is modified:"+newVal);
    })
    $scope.$watch("b", function(newVal, oldVal){
        if(newVal != oldVal)
            console.log("b is modified:"+newVal);
    })
    $scope.$watch("c", function(newVal, oldVal){
        if(newVal != oldVal){
            console.log("c is modified:"+newVal);
            if($scope.c > 50)
                $scope.a = 1000;
        }
           

    })
    //runs for every iteration of the digest cycle
    $rootScope.$watch(function(){
        console.log("Digest Itaration started")
    })
}]);