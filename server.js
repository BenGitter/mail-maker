// Express
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

// Other dependencies
var dotenv = require("dotenv").config();  // require dotenv
var mail = require("./mail");             // require mail.js
var api = require("./routes/api");

// Try mail
// mail(process.env.FROM, process.env.TO, "Henk");

// Start route
app.use("/", api);

app.use(express.static('public'));

// Start app
app.listen(port, function(){
  console.log('App listening on port', port);
});

