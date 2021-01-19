var http = require('http')
var fs = require('fs')


// var readStream = fs.createReadStream(__dirname+'/data.txt')

// readStream.on('data', function(chunk){
//     console.log("New Chunk arrrived:")
//     console.log(chunk);
// })


// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'});
//     // var reader = fs.createReadStream(__dirname+'/data.txt', 'utf-8')
//     var reader = fs.createReadStream(__dirname+'/index.html')
//     reader.pipe(res);
// })

// server.listen(3000, '127.0.0.1');
// console.log("Waiting for requests");

//PIPE
var http = require('http');
var fs = require('fs');

//inherits from eventemitter
var myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf-8');
var myWriteStream = fs.createWriteStream(__dirname + '/writedata.txt');
// myReadStream.on('data', function(chunk){
//     myWriteStream.write(chunk);
// })
myReadStream.pipe(myWriteStream);