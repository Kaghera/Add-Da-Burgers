// Import MySQL connection.
const connection = require("../config/connection.js");
const burgerTable = "burgers";

//Helper Functions
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
};

//ORM 
const orm = {
  selectAll : (burgerTable,callback) => {
    let queryStatement = `SELECT * FROM burgers;`;
    connection.query(queryStatement, (err, result)=>{
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: (burgerTable, cols, vals, callback) => {
    let queryStatement = `INSERT INTO  burgers (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;

    connection.query(queryStatement, vals, (err, result) => {
      if (err) throw err;
      console.log("Sucesfully Added");
      callback(result);
    });

  },

  updateOne : (burgerTable, cols, vals, condition, callback) =>{

    let queryStatement = `UPDATE burgers SET ${cols.toString()} = ? WHERE ${condition}`;

    connection.query(queryStatement, vals, (err, result) => {
      if (err) throw err;
      console.log("Sucesfully Updated");
      callback(result);
    });

  },

};
module.exports = orm;
