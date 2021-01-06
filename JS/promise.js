//producing code: actual work for fulfilling the promise
//consuming code: wants the result of the producing code
//promise:links them togeher

// let promise = new Promise(function(resolve, reject){
//     //excutor = the producing code
// })
//new Promise - "pending" -> "fulfilled"
                            // ->"rejected"
// let promise = new Promise(function(resolve, reject){
//         // setTimeout(()=>resolve("done"),1000)
//         setTimeout(()=>reject(new Error("Fire")),1000)
//         //result, state , .then, .catch, .finally
// });

// promise.then(
//     result => console.log(result),
//     // error => console.log(error)
// )

// promise.catch((er)=>console.log(er))

// new Promise(function(resolve, reject){
//     setTimeout(()=>resolve("done"),1000)
//     setTimeout(()=>resolve("2nd done"),1000)
//     // setTimeout(()=>reject(new Error("Fire")),1000)
//     //result, state , .then, .catch, .finally
// })
// .then(
// result => console.log(result),
// // error => console.log(error)
// )
// .catch((er)=>console.log(er))
// .finally(()=>console.log("Always Runs"))

//Multiple callbacks with promise
// var promise = new Promise(function(resolve, reject){
//     setTimeout(()=>reject(new Error("Fire")),1000)
// })

// promise.then(function(data){
//     result => console.log(result),
//     error => console.log(error)
// })

// promise.then(function(data){
//     result => console.log(result),
//     error => console.log(error)
// })


