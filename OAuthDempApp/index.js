const express = require('express');
const axios = require('axios')
require('dotenv').config();


const clientID = '554c49cd99b1b1328465'
const clientSecret = 'b95759e4a189c514cac41c72deb41f2ba79c86db'

const app = express();

app.set('view engine', 'ejs');
var access_token = "";

app.get('/', function(req, res) {
  res.render('pages/index',{client_id: clientID});
});

const port = process.env.PORT || 4000;
app.listen(port , () => console.log('App listening on port ' + port));

app.get('/github/callback', (req, res) => {
  const requestToken = req.query.code
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
    access_token = response.data.access_token
    res.redirect('/success');
  })
})

app.get('/success', function(req, res) {

  axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      Authorization: 'token ' + access_token
    }
  }).then((response) => {
    console.log(response)
    res.render('pages/success',{ userData: response.data });
  })
});
