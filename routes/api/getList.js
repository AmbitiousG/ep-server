var express = require('express');
var router = express.Router();
var query_sp = require('../../db/query_sp');

/* get list. */
router.post('/getList', function(req, res) {
  var data = req.body;
  var userID = 1;
  var paras = [userID];
  paras.push(-1);//CategoryID
  paras.push(-1);//RecordType
  paras.push(null);//pFrom
  paras.push(null);//pTo
  paras.push(1);//PageIndex
  paras.push(50);//PageSize
  query_sp(req.app, 'usp_GetRecords', paras, (results, fields) => {
    // res.json({results, fields});
    res.json({
      Success: true,
      Records: results[0]
    });
  })
});

module.exports = router;
