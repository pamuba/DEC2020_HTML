var express = require('express')
var app = express()

app.get('/contactlist', function(req, res){
    console.log("Received GET request");

    person1 = {
        name:"John",
        email:"john@gmail.com",
        number:"(111) 111-111"
    };
    person2 = {
        name:"Tom",
        email:"tom@gmail.com",
        number:"(222) 222-222"
    };
    person3 = {
        name:"Mary",
        email:"mary@gmail.com",
        number:"(333) 333-333"
    };

    var contactlist = [person1, person2, person3]
    res.json(contactlist)
});

app.use(express.static(__dirname+'/public'));

app.listen(3000);
console.log("Server running in port 3000");
