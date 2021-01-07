// let arr = ["John", "Bill", "Sam", "Mike"]
// let [n1,,,n2] = arr;

// console.log(n1, n2);

// let [a,b,c] = "ABC";


// let usr = {};
// //name last

// [usr.name, usr.lastName] = "Climate Change".split(' ')

// console.log(JSON.stringify(usr))

let [name1, name2, ...rest] = ["Hi", "how", "are", "you", "today"]
console.log(name1, name2, rest[0], rest[1])