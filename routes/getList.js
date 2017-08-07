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
router.post('/api/getList', function(req, res, next) {
  // res.json(data);
  res.json({});
  // next();
});

module.exports = router;
