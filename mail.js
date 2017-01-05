// Dependencies
var nodemailer = require("nodemailer");
var fs = require("fs");
var pug = require("pug");

var compiledFunction = pug.compileFile("public/mail.jade");

module.exports = function(from, to, name){

  var html = fs.createReadStream("public/mail.html");
  var transporter = nodemailer.createTransport(process.env.SMTP_LINK);
  
  var mailOptions = {
    from: "Ben <" + from + ">",
    to: "Henk <" + to + ">",
    subject: "Hi!",
    text: "Trying out nodemailer",
    html: compiledFunction({ name: name })
  };

  // Send mail
  transporter.sendMail(mailOptions, function(err, info){
    console.log(err || info);
  });
};

