var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tambola",
  // host: process.env.MYSQL_HOST,
  // user: process.env.MYSQL_USER,
  // password: process.env.MYSQL_PASSWORD,
  // database: process.env.MYSQL_DATABASE,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = {
  con
} 