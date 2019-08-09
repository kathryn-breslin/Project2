// Set up MySQL connection.
var mysql = require("mysql2");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "PileatedWoodpecker",
    database: "project2_db"
  });
}

// Make connection.
connection.connect();

// Export connection for our ORM to use.module.exports = router;ç
module.exports = connection;
