let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongo:27017/BMI-calculator',  {
         useNewUrlParser: true
     });

module.exports = {mongoose};