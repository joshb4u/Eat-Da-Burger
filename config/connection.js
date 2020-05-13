const mysql = require("mysql2");

let connection;
	if (process.env.JAWSDB_URL) {
		connection = mysql.createConnection(process.env.JAWSDB_URL);
	} else {
		connection = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "", //password required
			database: "burgers_db"
		});
	}

connection.connect();
module.exports = connection;