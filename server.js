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

