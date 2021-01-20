require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//handle any json data passed to it in the requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const posts = [
    {
        username:"John",
        title:"Post 1"
    },
    {
        username:"Will",
        title:"Post 2"
    }
]

app.get('/posts', authenticateToken, (req,res)=>{
    res.json(posts.filter(post=>post.username == req.user.name));
});


function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    //Bearer TOKEN

    if(token == null)return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err)return res.sendStatus(403);
        req.user = user;
        next();
    })

}

app.listen(3000);