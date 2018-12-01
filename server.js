// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
var tables = [
    {
        name: "group 7",
        email: "123@gmail.com",
        phoneNumber: 919 - 999 - 9999,
        uniqueID: 1
    }
];


var waitlist = [];





/////////
/////routes
///////// 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

//////
// api links
//////
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

//Get the reservation and decide what to do with it
app.post("/api/reservationProcess", function (req, res) {

    console.log("HERE");
    var newreservation = req.body;
    console.log(req.body);

    if (tables.length < 5) {
        app.post("/api/tables", function (req, res) {
            tables.push(newreservation);
            res.json(newreservation);
        });
    }
    else {
        app.post("/api/waitlist", function (req, res) {
            waitlist.push(newreservation);
            res.json(newreservation);
        });
    }

});


// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});