var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{  
    connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "Kasagh10",
      database: "burgersdb"
    });
};

connection.connect();

module.exports = connection;
