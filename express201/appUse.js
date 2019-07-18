const express = require('express');
const app = express();


/** express is used for two things:-
 * 1. Router
 * 2. Middleware
 * 
 * ---Middleware function
 * -->> Any function that has access to req, res and next object 
 */

 /**Req ---Middleware --- RES
  * 1. Request comes in
  * 2. We need to validate the user, sometime
  * 3. We need to store some things in DB
  * 4. Of there is data from the user we need to parese it and store it.
  * 5. Res 
  */

  // function validateUser(req, res, next){
  //   // get info out of the req object
  //   //do some stuff with database
  //   res.locals.validated = true;
  //   console.log('validated ran!');
  //   next();
  // }

  // app.use('/admin', validateUser);

  app.use((function(req,res,next){
    res.locals.validated = true;
    console.log('validated ran');
    next();
  }))

  app.get('/', function (req, res, next){
    res.send('<h1>Main page </h1>');
    console.log(res.locals.validated);
  })

  app.get('/admin', function (req, res, next){
    res.send('<h1>Admin page </h1>');
    console.log(res.locals.validated);
  })

  app.listen(3000);
