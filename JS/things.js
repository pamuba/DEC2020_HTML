// var counter = function(arr){
//     return `There are ${arr.length} elements in the array.`
// }

// var sum = function(x,y){
//     return `The sum:${x+y}`
// }

// var pi = 3.14;

// module.exports.counter = counter;
// module.exports.sum = sum;
// module.exports.pi = pi;


// module.exports.counter = function(arr){
//     return `There are ${arr.length} elements in the array.`
// }

// module.exports.sum = function(x,y){
//     return `The sum:${x+y}`
// }

// module.exports.pi = 3.14;



var counter = function(arr){
    return `There are ${arr.length} elements in the array.`
}

var sum = function(x,y){
    return `The sum:${x+y}`
}

var pi = 3.14;

module.exports = {
    counter:counter,
    sum:sum,
    pi:pi
}