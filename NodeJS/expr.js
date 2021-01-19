var express = require("express")

var app = express();

app.get('/', function(req, res){
    // res.send("Home Page");
    res.sendFile(__dirname+"/home.html")
});


app.get('/contact/:id', function(req, res){
    res.send("Contact Page");
    console.log(req.params.id);
});

app.listen(3000);