var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const secret = "ASDFGHHFSAAS";

router.get('/', function(req, res, next) {
  
});

router.post('/', function(req, res, next) {
  var body = req.body;
  var username = body.username;
  var password = body.password;
  if(username && password){
    if(username ==="Anant" && password ==="temp"){
      var payload = {
        name:"Anant"
      }
      var token = jwt.sign(payload,secret,{
        expiresIn:180
      })
      res.json({
        token,
        message:"Successfull"
      })
    }else{
      res.status(402);
      res.json({
        message:"Invalid Username and password!!"
      })
    }
  }else{
    res.json({
      message:"Invalid Parameters"
    })
  }

});

module.exports = router;
