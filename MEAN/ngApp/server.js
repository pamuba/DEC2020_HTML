const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const api = require('./server/routes/api')

const port = 3000;

const app = express()

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//api route  localhost:4200/api
app.use('/api', api)

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
});

app.listen(port, function(){
    console.log("Server running on localhost:"+port);
})
