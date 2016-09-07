// Express
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

// Other dependencies
var dotenv = require("dotenv").config();  // require dotenv
var nodemailer = require("nodemailer");
var fs = require("fs");


// Setting up nodemailer
var html = fs.createReadStream("public/mail.html");
var transporter = nodemailer.createTransport(process.env.SMTP_LINK);
var mailOptions = {
  from: "Ben <" + process.env.FROM + ">",
  to: process.env.TO,
  subject: "Hi!",
  text: "Trying out nodemailer",
  html: html
};


transporter.sendMail(mailOptions, function(err, info){
  console.log(err || info);
});


// server.send(message, function(err, message){
//   console.log(err || message);
// });

// Start route
app.get("/", function(req, res){
  res.sendFile("index.html", { root: "./public" });
});

app.use(express.static('public'));

// Start app
app.listen(port, function(){
  console.log('App listening on port', port);
})