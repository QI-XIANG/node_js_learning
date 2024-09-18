const { host, user, password } = require("../constant.js");

var mysql = require("mysql");

var con = mysql.createConnection({
  host: host,
  user: user,
  password: password,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
