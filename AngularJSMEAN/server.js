var express = require('express')
var mongojs = require('mongojs')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())

var db = mongojs('contactlist', ['contactlist']);

app.get('/contactlist', function(req, res){
    console.log("Received GET request");

    db.contactlist.find(function(err, docs){
        console.log(docs)
        res.json(docs)
    })
 
    
});

app.post('/contactlist', function(req, res){
    console.log(req.body);
})

app.use(express.static(__dirname+'/public'));

app.listen(3000);
console.log("Server running in port 3000");