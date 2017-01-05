// Dependencies
var express = require("express");
var router = express.Router();
var fs = require("fs");
var pug = require("pug");
var mail = require("../mail"); 

router
  .get("/name/:text", function(req, res){
    console.log(req.params.text);
    var file = pug.renderFile("./public/mail.jade", JSON.parse(req.params.text));
    fs.writeFileSync("./public/mail.html", file);

    res.json({"succes": "succesfull"});
    // mail(process.env.FROM, process.env.TO, req.params.text);

  })
  .get("/", function(req, res){
    res.sendFile("index.html", { root: "./public" });
  });


module.exports = router;