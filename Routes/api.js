// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "main.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;

    console.log(newcharacter);

    // We then add the json the user sent to the character array
    characters.push(newcharacter);

    // We then display the JSON to the users
    res.json(newcharacter);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});