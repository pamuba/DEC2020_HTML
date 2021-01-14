var app = angular.module('app',[]);
app.controller('msg', ['$scope', function($scope){

}]);
// app.directive("message", function($interpolate){
//     return{
//         compile:function(tElement, tAttributes){
//             console.log(tAttributes.text+" -In compile");
//             tElement.css("border", "1px solid black")
//             return {
//                 pre:function(scope, iElement, iAttributes, controller){
//                     console.log(tAttributes.text+" -I Pre")
//                 },
//                 post:function(scope, iElement, iAttributes, controller){
//                     console.log(tAttributes.text+" -I Post")
//                     if(iAttributes.text === "3"){
//                         iElement.css("border", "1px solid red")
//                     }
//                     iElement.on("click", scope.btnClick);
//                 }
//             }
//         },
//         controller:function($scope, $element, $attrs){
//             var v = $interpolate($attrs.text)($scope)
//             // console.log($attrs.text+" -In Controller");
//             console.log(v+" -In Controller")

//             $scope.btnClick = function(){
//                 alert(v);
//             }
//         }
//     }
// })


// app.directive("message", function($interpolate){
//     return{
//         link:{
//                 pre:function(scope, iElement, iAttributes, controller){
//                     console.log(iAttributes.text+" -I Pre")
//                 },
//                 post:function(scope, iElement, iAttributes, controller){
//                     console.log(iAttributes.text+" -I Post")
//                     if(iAttributes.text === "3"){
//                         iElement.css("border", "1px solid red")
//                     }
//                     iElement.on("click", scope.btnClick);
//                 }
            
//         },
//         controller:function($scope, $element, $attrs){
//             var v = $interpolate($attrs.text)($scope)
//             // console.log($attrs.text+" -In Controller");
//             console.log(v+" -In Controller")

//             $scope.btnClick = function(){
//                 alert(v);
//             }
//         }
//     }
// })

// app.directive("message", function($interpolate){
//     return{
//         compile:function(tElement, tAttributes){
//             console.log(tAttributes.text+" -In compile");
//             tElement.css("border", "1px solid black")

//             // post link
//             return function(scope, iElement, iAttributes, controller){
//                     console.log(tAttributes.text+" -I Post")
//                     if(iAttributes.text === "3"){
//                         iElement.css("border", "1px solid red")
//                     }
//                     iElement.on("click", scope.btnClick);
//                 }
            
//         },
//         controller:function($scope, $element, $attrs){
//             var v = $interpolate($attrs.text)($scope)
//             // console.log($attrs.text+" -In Controller");
//             console.log(v+" -In Controller")

//             $scope.btnClick = function(){
//                 alert(v);
//             }
//         }
//     }
// })



app.directive("message", function($interpolate){
    // post-link fn
    return function(scope, iElement, iAttributes, controller){
                    console.log(iAttributes.text+" -I Post")
                    if(iAttributes.text === "3"){
                        iElement.css("border", "1px solid red")
                    }
                    iElement.on("click", scope.btnClick);
                }
})



