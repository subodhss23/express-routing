const path = require('path');

const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));

//parse json and urlencoded data into req.body
app.use(express.json())
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//takes 2 args:-
//1. key
//2. value


/**process of using res.render
 * 1. Express as we know it happens, this file.
 * 2. We define a view engine.
 * EJS
 * Mustache
 * Handlebar
 * jade/pug
 * 3. inside one of our routes, we have a res.render
 * 4. we pass that res.render 2 things:
 * - files we want to use
 * - data we want to send to that file
 * 5. Express use the node module for our specifice view engine and parse the file.
 * taht means, it takes html/css/js and combines it with whateve "node" there is in the file.
 * 6. The final reulst of this process is a complete product of the things that the browser can read.
 * html,css,js
 */

app.get('/', function(req, res, next){
   res.render('index');
})


app.listen(3000, function(){
  console.log('Serving port 3000');
})
