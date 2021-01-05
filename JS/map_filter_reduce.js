// var persons = [
//     {id:20, name:'John'},
//     {id:23, name:'Mary'},
//     {id:12, name:'Will'},
//     {id:15, name:'Bill'},
//     {id:40, name:'Gates'},
// ]

// //retrieve the ids
// //var ids = [];
// ids = persons.forEach(function(person){
//     return person.id;
// } )

// console.log(ids)


// //using map
// var id = [];
// persons.map(function(person){
//     id.push(person.id)
// })
// console.log(id)

// //1. foreach will change the original array and dont return anything, map will give you a new array
// //2. map() does not execute the function for array elements without values.

// var people = [
//     {
//         id:10,
//         name:"john",
//         years:14,
//         dept:"HR"
//     },
//     {
//         id:12,
//         name:"john",
//         years:34,
//         dept:"Sales"
//     },
//     {
//         id:13,
//         name:"john",
//         years:24,
//         dept:"HR"
//     }
// ]
// //x(26)+ 13
// var totalYrs = people.reduce(function(accumulator, p){
//     return accumulator + p.years
// }, 10)

// console.log("Total Years:"+totalYrs);

// var hrs = people.filter(function(p){
//     return p.dept === "HR";
// })


// var sales = people.filter(function(p){
//     return p.dept === "Sales";
// })

// console.log(hrs)
// console.log(sales)


var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

  var total = personnel
  .filter(function(p){return p.isForceUser
  })
  .map(function(p){
      return p.pilotingScore + p.shootingScore
  })
  .reduce(function(acc, p){
      return acc+p
  })

  
  console.log(total.toString());