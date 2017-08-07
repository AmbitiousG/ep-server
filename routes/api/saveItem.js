var express = require('express');
var router = express.Router();

router.post('/save', (req, res, next) => {
  console.log(req.body);
  var data = req.body;
  console.log(data);
  var client = req.app.client;
  client.hmset('item', ['name', 'a', 'value', '123'], (err, res) => {
    res.json({success: true});
  })
})

module.exports = router;
