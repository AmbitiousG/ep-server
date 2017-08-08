var express = require('express');
var router = express.Router();
var query_sp = require('../../db/query_sp');

router.post('/deleteRecord', (req, res, next) => {
  var data = req.body;
  var userID = 1;
  var paras = [userID];
  paras.push(data.recordID);
  query_sp(req.app, 'usp_DeleteRecord', paras, (results, fields) => {
    res.json({
      Success: true,
      // RecordID: results[0][0].RecordID
    });
  })
})

module.exports = router;
