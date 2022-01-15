const express = require("express");

const app = express();
app.get("/", function(req, res){
  res.send("<h1> hEllo w </h1>");
});
app.get("/contact", function(req, res){
  res.send("Contact me at basit@itpt.co.uk");
});
app.listen(3000, function(){
  console.log("Server has started at port 3000");
})

// awkjwnsetgt
