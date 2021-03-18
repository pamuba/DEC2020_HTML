var app = angular.module('app',[]);
app.controller('emp', ['$scope', function($scope){
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;
    $scope.d = 4;

    // $scope.updateC = function(){
    //     $scope.c = $scope.a * 2;
    // }
    // Manual watcher
//     $scope.$watch("a", function(newValue, oldValue){
//         if(newValue != oldValue)
//             $scope.b = $scope.a *2;
//     })
//     $scope.$watch("b", function(newValue, oldValue){ 
//         if(newValue != oldValue)
//             $scope.c = $scope.b *2;
//     })
//     $scope.$watch("c", function(newValue, oldValue){
//         if(newValue != oldValue)
//             console.log("Updated C to: "+newValue);
//     })

//     $scope.$watchGroup(['a','b'], function(newValue, oldValue){
//         if(newValue != oldValue){
//             $scope.c = $scope.a * $scope.b
//             console.log("Updated C to: "+ $scope.c)
//         }

            
//  })

    // $scope.o = {
    //     a:1,
    //     b:2,
    //     c:3
    // }

    // $scope.$watch("o", function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c = $scope.o.a * $scope.o.b;  
    //         console.log("Changed") 
    //     }
    // }, true)
    // $scope.$watchGroup(['o.a', 'o.b'], function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c = $scope.o.a * $scope.o.b;   
    //     }
    // })

    // $scope.emps = [
    //     {empno:"1", ename:"john"},
    //     {empno:"2", ename:"Bill"},
    //     {empno:"3", ename:"Kill"},
    //     {empno:"4", ename:"Sam"},
    // ]
    // $scope.addEmp = function(){
    //     var no = $scope.emps.length + 1;
    //     var na = "Name"+no;
    //     $scope.emps.push({empno:no, ename:na})
    // }
    // $scope.modify3rd = function(){
    //     $scope.emps[2].ename = "Mill";
    // }
    // $scope.$watchCollection('emps', function(newVal, oldVal){
    //     console.log("No. of Employees"+$scope.emps.length);
    // })
    // $scope.$watch('emps', function(newVal, oldVal){
    //     console.log("No. of Employees"+$scope.emps.length);
    // }, true)
}]);