// function OuterFunction(str){
//     var outerVariable = 100;
//     function InnerFunction(){
//         console.log(outerVariable+" "+str)
//     }
//     return InnerFunction;
// }

// var inner = OuterFunction("Hello")
// inner()

// function Counter(){
//     var counter = 0;

//     function increment(){
//         return counter += 1;
//     }

//     return increment;
// }

// var counter = Counter()
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

//When to use closure
//to hide implementation details, private variables or functions

var counter = (function(){
    var privateCounter = 0;
    function incrementBy(val){
        privateCounter += val;
    }
    return {
        increment: function(){
            incrementBy(1)
        },
        decrement: function(){
            incrementBy(-1)
        },
        value:function(){
            return privateCounter;
        }
    }
})();

console.log(counter.value())
counter.increment()
counter.increment()
console.log(counter.value())
counter.decrement()
console.log(counter.value())