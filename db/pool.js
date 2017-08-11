var _ = require('lodash');
var mysql = require('mysql');
var config = require('config');
var pool = mysql.createPool(_.assign({
  connectionLimit: 10,
  host: '',
  user: '',
  password: '',
  database: ''
}, config));

pool.on('connection', function (connection) {
  console.log('connected');
});

module.exports = pool;
