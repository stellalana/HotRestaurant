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
    var newreservation = req.body;
    console.log(req.body);

    if (tables.length < 5) {
        postTablesCalled(req, res, newreservation);
    }
    else {
        postWaitListCalled(req, res, newreservation);
    }
});

app.post("/api/tables", postTablesCalled);

app.post("/api/waitlist", postWaitListCalled);

function postTablesCalled(req, res, obj) {
    tables.push(obj);
    res.json(obj);
}

function postWaitListCalled(req, res, obj) {
    waitlist.push(obj);
    res.json(obj);
}

// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});