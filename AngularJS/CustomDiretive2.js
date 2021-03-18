var mainApp = angular.module("mainApp",[]);


mainApp.directive('student', function(){

    //create an directive object
    var directive = {};
    //restrict=E
    directive.restrict = 'E';
    //template
    directive.template = "Student: <b>{{student.name}}</b>, Roll No:<b>{{student.rollno}}</b>"
    //criteria to diff betwn 2 student obs
    directive.scope = {
        student:"=name"
    }

    //compile 
    directive.compile = function(element, attributes){
        element.css("border", "3px solid #cccccc");
        //Link post
        var linkFunction = function($scope, element, attributes){
            // element.html('Student: <b>'+$scope.student.name+'</b>, Roll No:<b>'+$scope.student.rollno+'</b>')
            element.css('background-color', '#ff00ff')
        }
        return linkFunction;
    }
    return directive;
});

mainApp.controller('StudentController', function($scope){
    $scope.John = {};
    $scope.John.name = "Bill";
    $scope.John.rollno = 1;

    $scope.Jones = {};
    $scope.Jones.name = "Jones";
    $scope.Jones.rollno = 2;
})