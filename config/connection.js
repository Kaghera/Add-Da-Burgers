var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Kasagh10",
  database: "burgersdb"
});

module.exports = connection;
