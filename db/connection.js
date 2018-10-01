const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/inspirit');
mongoose.Promise = Promise;
module.exports = mongoose;