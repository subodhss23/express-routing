
const express = require('express');
const app = express();
 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 

/**
 * they will be used in all of our app.
 * 1. Static
 * 2. json
 * 3. urlencoded
 */
app.post('/ajax',(req, res) => {
  console.log(req.body);
  res.send("Testing this again");
});
 
app.listen(3000);
