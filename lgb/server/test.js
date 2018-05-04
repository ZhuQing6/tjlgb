var mysql= require('mysql');
function query(sql, callback){
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'TJ@123456',//TJ@123456
    database : 'tjlgb'
  });
  connection.connect();
  connection.query(sql, function (error, results) {
      if (error){console.log(error);return}else{
        callback(results);
        console.log('The solution is: ', results);
      }
  })
  connection.end(function(err){
    if(err){console.log(err);return}else{console.log("连接关闭")}
  });
}
exports.query = query;