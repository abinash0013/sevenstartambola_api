// import connection from "./connection";
// var connection = require('connection');
const { con } = require('./connection')

const ex_query = (sql) => {
  console.log("-------", con)
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    return result
  });
}

module.exports = { ex_query }
// export default ex_query;