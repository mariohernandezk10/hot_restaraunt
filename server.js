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
app.use(express.json());

require("/Routes/api.js");
require("/Routes/html.js");

// Star Wars Characters (DATA)
// =============================================================
var characters = [{
        name: "Yoda",
        phone: "Jedi Master",
        email: 900,
        unique: 2000
    },
    {
        name: "Darth Maul",
        role: "Sith Lord",
        age: 200,
        forcePoints: 1200
    },
    {

        name: "Obi Wan Kenobi",
        role: "Jedi Master",
        age: 55,
        forcePoints: 1350
    },
    {
        "customerName": "Ahmed",
        "customerEmail": "ahmed@example.com",
        "customerID": "afhaque89",
        "phoneNumber": "000-000-0000"
    },
    {
        "customerName": "Mario Hernandez",
        "phoneNumber": "5129991186",
        "customerEmail": "mariohernandezk10@gmail.com",
        "customerID": "mklmlml"
    },
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "main.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/formPage", function (req, res) {
    res.sendFile(path.join(__dirname, "formPage.html"));
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

// Displays a single character, or returns false
app.get("/api/characters/:character", function (req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newCharacter);

    characters.push(newCharacter);

    res.json(newCharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

