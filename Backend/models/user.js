let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
   username: {
       type: String,
       unique: true,
       required: true
   },
   bmis: [{
       bmi: {
           type: Number,
           required: true
       },
       date: {
           type: Date,
           required: true
       }
   }]
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User
};
