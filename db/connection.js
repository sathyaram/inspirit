const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/inspirit');
mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open');
  }); 

module.exports = mongoose;