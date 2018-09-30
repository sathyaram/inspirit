const express = require('express')
const app = express()
const parser = require('body-parser')
const createItem = require('./routes/createitem');
const getIndex = require('./routes/getindex');

app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Registering configured route
app.use(getIndex);

app.listen(8008, () => console.log("Im working"));