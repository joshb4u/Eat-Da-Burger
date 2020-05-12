// Require express
const express = require("express");
// Import express handlebars
const expressHandlebars = require("express-handlebars");
// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
	console.log("Server listening on: http://localhost:" + PORT);
});