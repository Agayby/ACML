const express = require('express');
const bodyParser = require('body-parser');

var app = express();
//parsing request bodies
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
  });
