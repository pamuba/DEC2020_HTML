var app = angular.module('app',[]);
app.controller('msg', ['$scope', function($scope){

}]);
app.directive("message", function(){
    return{
        compile:function(tElement, tAttributes){
            console.log(tAttributes.text+" -In compile");

            return {
                pre:function(scope, tElement, tAttributes){
                    console.log(tAttributes.text+" -I Pre")
                },
                post:function(scope, tElement, tAttributes){
                    console.log(tAttributes.text+" -I Post")
                }
            }
        },
        controller:function($scope, $element, $attrs){
            console.log($attrs.text+" -In Controller");
        }
    }
})
