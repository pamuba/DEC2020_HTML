var myApp = angular.module("myModule", []);

// var myController = function($scope){
//     $scope.message = "Test Message"
// }

myApp.controller("myController", function($scope){
    $scope.message = "Test Message"
});

myApp.controller("myController1", function($scope){
    $scope.message = "Test Message2"
});