//rest parameters 
// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2,3,4,5))

// function add(...args){
//     let sum = 0;
//     for(let arg of args)
//         sum +=arg
//     return sum;
// }
// console.log(add(1,2,3,4,5))
// console.log(add(4,5))
// console.log(add(1))


// function add(a,b,...args){
//     let sum = a+b;
//     console.log("a:"+a+" b:"+b+" args len:"+args.length)
//     console.log(args instanceof Array)
//     for(let arg of args)
//         sum +=arg
//     return sum;
// }
// console.log(add(1,2,3,4,5))

//Arguments, array like object
// function add(){
//     let sum = 0;
//     console.log(arguments instanceof Array)
//     for(let arg of arguments)
//         sum +=arg
//     return sum;
// }
// console.log(add(1,2,3,4,5))

//spread
// let arr = [2,3,1,5,6,7,3]
// let ar = [44,23,65,7,8787,799]
// // console.log(Math.max(...arr))
// console.log(Math.max(999,...arr,...ar))

// let a = [...arr,...ar]
// console.log(a)

// let name = "Jill Johnson"
// let a = [...name]
// console.log(a)

//copy of the array, without spread 