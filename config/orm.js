// Importing MySQL Connection:
const connection = require("./connection.js");

const orm = {
	// Select All:
	selectAll: function(cb) {
		let query = "SELECT * FROM burgers;";
		connection.query(query, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	// Insert One
	insertOne: function(burger, devour, cb) {
		let query = "INSERT INTO burgers (burgerName) VALUES (?)";
		connection.query(query, burger, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	// Update One
	updateOne: function(id, cb) {
		let query = "UPDATE burgers SET devoured = true WHERE id = " + id;
		connection.query(query, function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},
};

module.exports = orm;