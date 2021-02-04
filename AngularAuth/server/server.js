const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const PORT = 3000
const api = require('./routes/api')

const app = express()
app.use(cors())

app.use(bodyParser.json())

app.use('/api', api)

app.get('/', function(req, res){
    res.send("Hello from Server");
})

app.listen(PORT, function(){
    console.log('Server running on PORT:3000')
})