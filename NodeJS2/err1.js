// //1. safely throw errors

// // Define divider as a syncrhonous function
// var divideSync = function(x,y) {
//     // if error condition?
//     if ( y === 0 ) {
//         // "throw" the error safely by returning it
//         return new Error("Can't divide by zero")
//     }
//     else {
//         // no error occured, continue on
//         return x/y
//     }
// }

// // // Divide 4/2
// // var result = divideSync(4,2)
// // // did an error occur?
// // if ( result instanceof Error ) {
// //     // handle the error safely
// //     console.log('4/2=err', result)
// // }
// // else {
// //     // no error occured, continue on
// //     console.log('4/2='+result)
// // }

// // Divide 4/0
// result = divideSync(4,0)
// // did an error occur?
// if ( result instanceof Error ) {
//     // handle the error safely
//     console.log('4/0=err', result)
// }
// else {
//     // no error occured, continue on
//     console.log('4/0='+result)
// }


// var divide = function(x,y,next) {
//     // if error condition?
//     if ( y === 0 ) {
//         // "throw" the error safely by calling the completion callback
//         // with the first argument being the error
//         next(new Error("Can't divide by zero"))
//     }
//     else {
//         // no error occured, continue on
//         next(null, x/y)
//     }
// }

// // divide(4,2,function(err,result){
// //     // did an error occur?
// //     if ( err ) {
// //         // handle the error safely
// //         console.log('4/2=err', err)
// //     }
// //     else {
// //         // no error occured, continue on
// //         console.log('4/2='+result)
// //     }
// // })

// divide(4,0,function(err,result){
//     // did an error occur?
//     if ( err ) {
//         // handle the error safely
//         console.log('4/0=err', err)
//     }
//     else {
//         // no error occured, continue on
//         console.log('4/0='+result)
//     }
// })




// // Definite our Divider Event Emitter
// var events = require('events')
// var Divider = function(){
//     events.EventEmitter.call(this)
// }
// require('util').inherits(Divider, events.EventEmitter)

// // Add the divide function
// Divider.prototype.divide = function(x,y){
//     // if error condition?
//     if ( y === 0 ) {
//         // "throw" the error safely by emitting it
//         var err = new Error("Can't divide by zero")
//         this.emit('error', err)
//     }
//     else {
//         // no error occured, continue on
//         this.emit('divided', x, y, x/y)
//     }

//     // Chain
//     return this;
// }

// // Create our divider and listen for errors
// var divider = new Divider()
// divider.on('error', function(err){
//     // handle the error safely
//     console.log(err)
// })
// divider.on('divided', function(x,y,result){
//     console.log(x+'/'+y+'='+result)
// })

// // Divide
// divider.divide(4,2).divide(4,0)


try {
    setTimeout(function(){
        var err = new Error('example')
        throw err
    }, 1000)
}
catch (err) {
    // Example error won't be caught here... crashing our app
    // hence the need for domains
}