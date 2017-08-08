var express = require('express');
var router = express.Router();
var query_sp = require('../../db/query_sp');

router.post('/save', (req, res, next) => {
  var item = req.body.item;
  var userID = 1;
  var paras = [userID];
  // pUserID
  // pCategoryID
  // pRecordType
  // pAmount
  // pMemo
  // pDescription
  // pRecordDate
  paras.push(item.category);
  paras.push(item.recordType);
  paras.push(item.amount);
  paras.push(item.memo);
  paras.push(item.desc);
  paras.push(item.datetime);
  query_sp(req.app, 'usp_SaveRecord', paras, (results, fields) => {
    res.json({
      Success: true,
      RecordID: results[0][0].RecordID
    });
  })
})

module.exports = router;
