const express = require('express');
const app = express();

function addition(req, res, next){
  res.locals.validate = true;
  console.log('we are doing addition here.');
  next();
}

app.use(addition);

app.get('/', function(req, res, next){
  res.send('<h1>This is working!</h1>');
  console.log(res.locals.validate);
})


app.listen(3000, function(){
  console.log('serving on port 3000');
})