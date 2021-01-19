// console.log(__dirname)
// console.log(__filename)


// var c = setTimeout(function(){
//     console.log("Time Over")
// }, 5000);


// clearTimeout(c);

//function expression
var fn = function(){
    console.log("From Function expression")
}

function mainFunction(fun){
    fun();
}
mainFunction(fn);