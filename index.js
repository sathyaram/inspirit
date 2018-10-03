const express = require('express')
const app = express()
const parser = require('body-parser')
const passport = require('passport')

app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(__dirname + '/public'));

// Requires the config/passport file
require('./config/passport')(passport)
// Initialize Passport, used everytime you make a request
app.use(passport.initialize())
// Passport is going to be in charge of handling sessions
app.use(passort.session())

// Registering configured route
app.use(require("./routes/index.js"));

app.listen(8008, () => console.log("Im working"));