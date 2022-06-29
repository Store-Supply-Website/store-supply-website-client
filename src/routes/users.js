var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//?
var userModel = require('./models/userModel');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'add user' });
  });
   
  router.post('/add-user', function(req, res, next) {
       
      req.assert('username', 'Username is required').notEmpty()           //Validate username
      req.assert('email', 'A valid email is required').isEmail()  //Validate email
      req.assert('phone', 'Phone number is required').notEmpty()           //Validate phone
      req.assert('address', 'Address is required').notEmpty()           //Validate address

      var errors = req.validationErrors()
       
      if( !errors ) {   //No errors were found.  Passed Validation! 
        var userDetails = new userModel({
          username: req.body.username,
          email: req.body.email,
          phone:req.body.phone,
          //去掉了逗号
          address: req.body.address
        });
         
        userDetails .save((err, doc) => {
              if (!err){
                  req.flash('success', 'User added successfully!');
                  res.redirect('/');
                }
              else{
                  console.log('Error during record insertion : ' + err);
              }
        });
     
      }
      else {   //Display errors to user
          var error_msg = ''
          errors.forEach(function(error) {
              error_msg += error.msg + '<br>'
          })                
          req.flash('error', error_msg)        
           
          res.render('/', { 
              title: 'Add New User',
              username: req.body.username,
              email: req.body.email,
              phone:req.body.phone,
             address: req.body.address
          })
      }
  });
   
  module.exports = router;