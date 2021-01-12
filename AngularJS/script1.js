angular
.module("myModule", [])
.controller("Ctrl", function($scope){
    $scope.message = "Test Message"
})
.controller("EmpCtrl", function($scope){
   var employees = [
       { firstName: "John", lastName:"Wick", dept:"HR", salary:"999999"},
       { firstName: "John", lastName:"Wick", dept:"HR", salary:"999999"},
       { firstName: "John", lastName:"Wick", dept:"HR", salary:"999999"},
       { firstName: "John", lastName:"Wick", dept:"HR", salary:"999999"},
       { firstName: "John", lastName:"Wick", dept:"HR", salary:"999999"}
   ];

   var countries = [
      { name:"USA",
       cities:[
           {name:"LA"},
           {name:"Chicago"},
           {name:"Houston"}
       ]},
       { name:"India",
       cities:[
           {name:"Hyderabad"},
           {name:"Mumbai"},
           {name:"Delhi"}
       ]},
   ]

   $scope.employees = employees;
})
