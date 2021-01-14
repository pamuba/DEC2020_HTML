var app = angular.module('app',[]);
app.controller('msg', ['$scope', function($scope){

}]);
app.directive("message", function($interpolate){
    return{
        compile:function(tElement, tAttributes){
            console.log(tAttributes.text+" -In compile");

            return {
                pre:function(scope, iElement, iAttributes, controller){
                    console.log(tAttributes.text+" -I Pre")
                },
                post:function(scope, iElement, iAttributes, controller){
                    console.log(tAttributes.text+" -I Post")
                }
            }
        },
        controller:function($scope, $element, $attrs){
            var v = $interpolate($attrs.text)($scope)
            // console.log($attrs.text+" -In Controller");
            console.log(v+" -In Controller")
        }
    }
})
