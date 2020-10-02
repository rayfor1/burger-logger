var express = require("express");
var bodyParser =  require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars setup: 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes setup:
var routes = require("./controllers/burgersController.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on http://localhost:" + PORT);
  });