// var myApp = angular.module("myModule", []);

// // var myController = function($scope){
// //     $scope.message = "Test Message"
// // }

// myApp.controller("myController", function($scope){
//     $scope.message = "Test Message"
// });

angular
.module("myModule", [])
.controller("myController", function($scope){
    $scope.message = "Test Message"
})
.controller("myController1", function($scope){
    $scope.message = "Test Message2"
})
.controller("empController", function($scope){
    var employee = {
        firstName:"John",
        lastName:"Wick",
        dept:"Sales",
        img:"/Images/cat.jpg"
    };
    $scope.emp = employee;
})