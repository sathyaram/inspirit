const express = require('express')
const app = express()
const parser = require('body-parser')


app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(__dirname + '/public'));


// Registering configured route
app.use(require("./routes/index.js"));


app.listen(8008, () => console.log("Im working"));