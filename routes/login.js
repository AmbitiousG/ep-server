var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var secretkey = require('../utils/auth').secretkey;

/* GET home page. */
router.post('*', function(req, res, next) {
  var {username, password} = req.body;
  if(username == 'admin' && password == '1'){
    var tokenData = {
      username,
      id: 1,
    };
    res.json({
      username,
      token: jwt.sign(tokenData, secretkey)
    });
  }
  else{
    res.json({
      error: 'invalid username or password!'
    })
  }
});

module.exports = router;
