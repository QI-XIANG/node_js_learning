const { host, user, password } = require("../constant.js");

var mysql = require("mysql");

var con = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});