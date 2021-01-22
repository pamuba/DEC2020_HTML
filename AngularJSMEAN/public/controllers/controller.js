function AppCtrl($scope, $http){
    console.log("Hello from controller"); 

    $http.get('/contactlist').success(function(response){
        console.log("got the data from the server");
        $scope.contactlist = response;
    });

    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact);
    }
    
}