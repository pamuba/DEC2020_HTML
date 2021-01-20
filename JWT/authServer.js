require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//handle any json data passed to it in the requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.post('/token', (req, res)=>{
    const refreshToken = req.body.token
    if(refreshToken == null) return res.sendStatus(401);
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err,user)=>{
        if(err) return res.sendStatus(403);
        const accessToken = generateAccessToken({name:user.name})
        res.json({accessToken:accessToken})
    })
})

let refreshTokens = []
app.post('/login', (req, res)=>{
    //Authenticate
    const username = req.body.username
    const user = { name: username}
    //create the jwt
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);

    res.json({accessToken: accessToken, refreshToken:refreshToken})
})

function generateAccessToken(user){
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'25s'})
}
app.listen(4000);