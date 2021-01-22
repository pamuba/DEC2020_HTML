
//


// process.on('exit', function(){
//     console.log("Ended")
// })

throw new Error("Error Message")

//Best practises

// 1. try/catch
//2. catching uncaught exps
process.on('uncaughtException', function(err){
    console.log(err)
})

//3. Exceptions with promises
doSomething1()
 .then(doSomething2)
 .then(doSomething3)
 .catch(err=>console.log(err))


 doSomething3 = () => {
     //....
     try{
         //...
     }
     catch(ee){
         //throw 
     }
 }


 doSomething1()
 .then(doSomething2().catch(err=>{
     throw err// Break the chain
 }))
 .then(doSomething3().catch(err=>{
    throw err// Break the chain
 }))
 .catch(err=>console.log(err))


//4. 

async function doSomething4(){
    try{
        await //
    }
    catch(err){
        
    }
}


