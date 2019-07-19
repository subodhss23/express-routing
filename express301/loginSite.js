const path = require('path');

const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet())

const cookieParser = require('cookie-parser');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use( function(req, res, next){
  if(req.query.msg === 'fail'){
      res.locals.msg = 'Sorry, username or the password does not match';
  } else {
    res.locals.msg = ''
  }
  next();
});

app.get('/', function(req, res, next){
  console.log(req.param())
  res.send('Sanity check');
})

app.get('/login', function(req, res, next){
  // the req object has a query  property in express
  // req.query is an object,with a property of every key in the query string
  // the query string is where you put insecure data
  // cannot be password, username
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
        res.cookie('username', username);
        //res.redirect takes 1 args: where to send user
        res.redirect('/welcome');
      }  else {
        //the ? is a specical character in url
        //it indicates end of URL resource path and start of query parameters.
        res.redirect('/login?msg=fail&test=hello');
      }
  
  // req.body is made by urlencoded., which pareses
  // the http message for sent data
  // res.json(req.body);
})

app.get('/welcome', function(req, res, next){
  //req.cookies object will have a property for every named
  // cookie that has been set.
  res.render('welcome', {
    username: req.cookies.username
  });
})

/**is a router, anytime somethings has a : in front it is a wildcard!
 * wildcard, will match anything in the slot
 */
app.get('/story/:storyId', function(req, res, next){
  /** the req.params object always exists,
   * it will have a property for each wildcar in the route
   */
  res.send(`<h1>Story ${req.params.storyId}</h1>`);
  console.log(req.params.storyId);

})

app.get('/logout', function(req, res, next){
  //res.clearCookie takes one args
  //1. cookie to clear (by name)
  //clearing data/cookie from their local machine
  res.clearCookie('username')
  res.redirect('/login');
})

app.listen(3000, function(){
  console.log('Serving port 3000');
})