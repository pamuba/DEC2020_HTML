new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1),1000)
})
.then(r=>{
    console.log(r)
    return 2
})
.then(r=>{
    console.log(r)
    return 3
})
.then(r=>console.log(r))