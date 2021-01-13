var app = angular.module('app',[]);

app.controller('AppCtrl', function($scope, $q){
   function add(x,y){
    var q = $q.defer()
    setTimeout(function(){  //$timeout return a promise
        var result = x+y;
        if(result >= 0){
         q.resolve(x+y);
        }
        else{
            q.reject('Negative value '+ result)
        }
    }, 100);
    return q.promise;
   }

   var start = Date.now();
   add(5,2)
    .then(function(result){
        return add(result , -10)
    })
    .then(function(result){
        return add(result , 1)
    }/*, function(error){return 0}*/)
    .then(function(result){
        $scope.result = result
        // $scope.elapsedTime = Date.now() - start;
    })
    .catch(function(error){
        $scope.error = error;
    })
    .finally(function(){
        $scope.elapsedTime = Date.now() - start;
    })

    // add(5,2, function(result){
    //     add(result,3, function(result){
    //         add(result,1, function(result){
    //             $scope.result = result
    //             $scope.elapsedTime = Date.now() - start;
    //         }, function(error){/* */})
    //     }, function(error){/* */})
    //  }, function(error){/* */})
  })