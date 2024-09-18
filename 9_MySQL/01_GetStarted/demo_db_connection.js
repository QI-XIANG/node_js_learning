const { host, user, password } = require("../constant.js");

var mysql = require("mysql");

var con = mysql.createConnection({
  host: host,
  user: user,
  password: password,
});

let sql = "SELECT * FROM books.authorisbn;";

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});
