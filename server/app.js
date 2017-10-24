const express = require('express');
const request = require('request');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
require('dotenv').config();

// app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get('/api', (req, res) => {
  const url = `http://api.translink.ca/rttiapi/v1/buses?apikey=${process.env['TRANSLINK']}`;
  request({
    uri: url,
    method: "GET",
    json: true
  }, (err, response, body) => {
    if (err || response.statusCode !== 200) {
      return res.sendStatus(500);
    } else {
      res.json(body);
    }
  });
});

module.exports = app;
