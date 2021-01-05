var persons = [
    {id:20, name:'John'},
    {id:23, name:'Mary'},
    {id:12, name:'Will'},
    {id:15, name:'Bill'},
    {id:40, name:'Gates'},
]

//retrieve the ids
//var ids = [];
ids = persons.forEach(function(person){
    return person.id;
} )

console.log(ids)


//using map
var id = [];
persons.map(function(person){
    id.push(person.id)
})
console.log(id)

//1. foreach will change the original array and dont return anything, map will give you a new array
//2. map() does not execute the function for array elements without values.


