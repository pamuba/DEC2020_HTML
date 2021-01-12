angular
.module("myModule", [])
.controller("Ctrl", function($scope){

    var technologies = [
        {name:"C#", likes:0, dislikes:0},
        {name:"React", likes:0, dislikes:0},
        {name:"Angular", likes:0, dislikes:0},
        {name:"Vue", likes:0, dislikes:0},
        {name:"Java", likes:0, dislikes:0},
    ]
    $scope.technologies = technologies

    $scope.incrementLikes = function(tech){
        tech.likes++;
    }

    $scope.incrementDislikes = function(tech){
        tech.dislikes++;
    }
})
