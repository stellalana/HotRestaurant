// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Starts the server to begin listening
var tables = [
    {
            name: "group 7",
            email: "123@gmail.com",
            phoneNumber: 919-999-9999,  
            uniqueID: 1
          }
];


var waitlist = [];





/////////
/////routes
///////// 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

//////
// api links
//////
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });



// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});