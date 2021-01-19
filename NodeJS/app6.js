const  fs  = require('fs');
var http = require('http')

var server = http.createServer(function(req, res){
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/home.html').pipe(res);
    }
    else if(req.url === '/contactUs/:id'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);
        console.log(object)
    }
    else{
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
        

});

server.listen(3000, '127.0.0.1');
console.log('Listening');