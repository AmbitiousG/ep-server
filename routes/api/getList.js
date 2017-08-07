var express = require('express');
var router = express.Router();

var data = [];
data.push({
  name: 'a',
  value: 12
});
data.push({
  name: 'b',
  value: 312
});

/* get list. */
router.post('/getList', function(req, res) {
  var client = req.app.client;
  client.hgetall('item', (err, obj) => {
    res.json(obj);
  })
  // next();
});

module.exports = router;
