const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Chiakaray820",
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    database: "burgers_db"
  });
}

connection.connect( err => {
  if (err) {
    console.error("There was an error connecting: " + err.stack);
    return;
  }
  else{
  console.log("Connected as id " + connection.threadId);
  };
});

module.exports = connection;