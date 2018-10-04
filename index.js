const express = require('express')
const app = express()
const parser = require('body-parser')
const passport = require('passport')

// routes
const itemRoutes = require('./routes/item');
const categoryRoutes = require('./routes/category');

app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(__dirname + '/public'));

// Requires the config/passport file
// require('./config/passport')(passport)
// // Initialize Passport, used everytime you make a request
// app.use(passport.initialize())
// // Passport is going to be in charge of handling sessions
// app.use(passport.session())

// Registering configured route
app.use(itemRoutes);
app.use(categoryRoutes);

// Heroku
app.set('port', process.env.PORT || 8008)

app.listen(app.get('port'), () => {
  console.log('up and running')
})

// app.listen(8008, () => console.log("Im working"));
