// Require express and orm file:
const express = require("express");
const router = express.Router();
const orm = require("../config/orm");

router.get("/", function(req, res) {
	orm.selectAll(function(data) {
		console.log(data);
		let object = {
			burgers: data
		};
		res.render("index", object);
	});
});

router.post("/burgers/create", function(req, res) {
	orm.insertOne(req.body.name, false, function(data) {
		console.log(data);
		res.redirect("/");
	});
});

router.put("/burgers/:id", function(req, res) {
	orm.updateOne(req.params.id, function(data) {
		res.sendStatus(200);
	});
});

module.exports = router;