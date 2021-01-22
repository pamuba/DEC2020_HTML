var cluster = require('cluster');
const { countReset } = require('console');
var http = require('http')
var cpus = 4;

//is it the main process
if(cluster.isMaster){
    for(var i=0;i<cpus;i++){
        console.log("Starting Child processes")
        cluster.fork();
    }
}
else{
    http.createServer(function(req, res){
        res.writeHead(200);
        res.end('process '+process.pid+' say hello');
    }).listen(3000)
}
//one serve handled by 4 child proceese