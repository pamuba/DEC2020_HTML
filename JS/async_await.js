
// // isString = function(data){
// //     if(Object.prototype.toString.call(data) === '[object String]')
// //         return true;
// //     else
// //         return false
// // }

// // console.log(isString(3))

function a(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('First');
        }, 2000)
    });
}

function b(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('Second');
        }, 1000)
    });
}

function c(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('Third');
        }, 100)
    });
}

async function msg(){
    a().then(function(r){console.log(r)});
    b().then((r)=> console.log(r));
    const cc = await c();

    
    
    console.log(`${cc}`)
}

msg();

// // async function msg(){
// //     const [aa, bb, cc] = await Promise.all([a(), b(), c()]);

// //     console.log(`${aa} ${bb} ${cc}`)
// // }

// msg();

// function n(){
//   setTimeout(()=>console.log("First"), 3000)
//   console.log("First")
//   setTimeout(()=>console.log("Second"), 1000)
//   console.log("Second")
//   setTimeout(()=>console.log("Third"), 2000)
//   console.log("Third")
// }

// n()