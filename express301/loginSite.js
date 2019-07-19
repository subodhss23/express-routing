const path = require('path');

const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet())

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res, next){
  res.send('Sanity check');
})

app.get('/login', function(req, res, next){
  res.render('login');
})

app.post('/process_login', function(req, res, next){
  const password = req.body.password;
  const username = req.body.username;
  //check the db to see if user credential are valid using bcrypt
      // if they are valid
      //  - save their username in a cookie
      //  - send them to the welcome page
  
      if (password === "x"){
        // res.cookie takes two args:
        // 1. name of the cookie
        // 2. value to set it to
      }

  
  // req.body is made by urlencoded., which pareses
  // the http message for sent data
  res.json(req.body);
})

app.listen(3000, function(){
  console.log('Serving port 3000');
})