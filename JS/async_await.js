
// isString = function(data){
//     if(Object.prototype.toString.call(data) === '[object String]')
//         return true;
//     else
//         return false
// }

// console.log(isString(3))

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
        }, 3000)
    });
}

function c(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('Third');
        }, 5000)
    });
}

// async function msg(){
//     const aa = await a();
//     const bb = await b();
//     const cc = await c();

//     console.log(`${aa} ${bb} ${cc}`)
// }


async function msg(){
    const [aa, bb, cc] = await Promise.all([a(), b(), c()]);
    
    console.log(`${aa} ${bb} ${cc}`)
}

msg();