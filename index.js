const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/BMI-calculator',  {
    useNewUrlParser: true
});

const {User} = require('./models/user');

var app = express();
//parsing request bodies
app.use(bodyParser.json());

app.use(
    cors({
      origin: true,
      credentials: true,
      methods: ['GET', 'POST', 'PATCH', 'DELETE']
    })
  );

  app.post('/users', (req, res) => {
    const user = new User({
        username: req.body.username
    });

    user.save()
        .then((user) => {
            res.send(user);
        })
        .catch(() => {
            res.status(400).send();
        });
    
});


app.listen(3000, () => {
    console.log(`Server running on port 3000`);
  });
