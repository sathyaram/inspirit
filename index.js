const express = require('express')
const app = express()
const parser = require('body-parser')
const getIndex = require('./routes/getindex');
const createItem = require('./routes/createitem');

app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Registering configured route
app.use(getIndex);
app.use(createItem);

app.listen(8008, () => console.log("Im working"));