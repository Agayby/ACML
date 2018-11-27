const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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


app.listen(3000, () => {
    console.log(`Server running on port 3000`);
  });
