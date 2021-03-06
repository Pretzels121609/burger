const express = require('express')
const app = express()
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000
app.use(express.static("public"));
// express.static("public") (ABOVE), uses that code to serve images, CSS files, 
// and JavaScript files in a directory named public


app.listen(port, () =>  console.log("Server listening on: http://localhost:" + port));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_Controller.js");

app.use(routes);