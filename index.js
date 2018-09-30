const express = require('express')
const app = express()
const parser = require('body-parser')

app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }));

app.listen(8008, () => console.log("Im working"));