var app = angular.module("app", []);
app.controller('emp', function($scope){
    $scope.msg =  "This is message";
})

app.directive("myInfoMsg", function(){
    return {
        // templateUrl: "my-info-msg.html"
        templateUrl : "my-info-msg.html"
    }
})