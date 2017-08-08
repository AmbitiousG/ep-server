module.exports = (app, sql, callback) => {
  var pool = app.get('mysql_pool');
  pool.getConnection((err, connection) => {
    connection.query(sql, (err, results, fields)=> {
      callback(results, fields);
      connection.release();
      if(err)
        throw error;
    })
  })
}