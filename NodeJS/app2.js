var fs = require('fs');

//Sync
// var read = fs.readFileSync('data.txt', 'utf-8');
// console.log(read)
// fs.writeFileSync('write.txt',read);

//Async
// fs.readFile('data.txt', 'utf-8', function(err, data){
//     console.log(data);
// })
// console.log("Below")

fs.readFile('data.txt', 'utf-8', function(err, data){
    fs.writeFile('write.txt', data, function(error, result){
        if(err)
            console.log('error',err)
    })
})
