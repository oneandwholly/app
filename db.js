var mysql = require('mysql');

exports.connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '9200',
  database : 'my_db'
});
