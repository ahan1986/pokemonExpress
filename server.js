//Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Setting up Express App

var app = express();
var PORT = process.env.PORT || 3000;

//Setting up the Express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Adding Pokemon Characters which is our (DATA)

var characters = [
    {
        routeName:"charmander",
        name:"Charmander",
        type: "Fire",
        numberOfEvolutions: 3
    },
    {
        routeName:"bulbasaur",
        name:"Bulbasaur",
        type: 'Grass',
        numberOfEvolutions: 3
    },
    {
        routeName: "squirtle",
        name: "Squirtle",
        type: "Water",
        numberOfEvolutions: 3
    }
];

//Routes

// creating basic routes that sends the user first to the AJAX page

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/all", function( req, res ){
    res.sendFile(path.join(__dirname, "all.html"));
});

//Displays all the characters
app.get("/api/characters", function(req, res) {
    return res.json(characters);
});

//Displays a single character, or returns false
app.get("/api/characters/:ID", function (req, res) {
    var chosen = req.params.ID;

    console.log(chosen);

    for(var i =0; i< characters.length; i++) {
        if(chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

//Create New pokemon characters which takes in JSON input
app.post('/api/characters', function(req, res) {
    var newPokemon = req.body;

    newPokemon.routeName = newPokemon.name.replace(/\s+/g, '').toLowerCase();

    console.log(newPokemon);

    characters.push(newPokemon);

    res.json(newPokemon);
});

//Start the server to being listening

app.listen(PORT, function() {
    console.log("listening on PORT: " + PORT);
})