var express = require("express");
var bodyParser =  require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8000;
var app = express();

app.listen(PORT, function() {
    console.log("Listening on http://localhost:" + PORT);
  });