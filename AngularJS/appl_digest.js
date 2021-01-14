var app = angular.module('app',[]);
app.controller('msg', ['$scope', '$rootScope', function($scope, $rootScope){
   
    $scope.data = [
        {v:32, r:0},
        {v:44, r:0},
        {v:13, r:0},
        {v:92, r:0},
    ];

}]);

app.directive('message', function(){
    return {
        templateUrl: 'info-msg.html',
        
        compile: function(tElement, tAttributes){
            return function(scope, iElement, iAttributes, controller){
                //access the DOM element 
                iElement.find("#btnSum").on("click", scope.btnClick);
            }
        },
        controller: function($scope, $element, $attrs){
            $scope.btnClick = function(){
                $scope.o.r = $scope.o.v * $scope.o.v;
                
            }
        }
    }
})

