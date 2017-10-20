var express = require('express')
var app = express();
require('dotenv');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
});
