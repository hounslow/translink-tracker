const express = require('express');
const request = require('request');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
require('dotenv').config();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get('/api', (req, res) => {
  // const url = `http://gtfs.translink.ca/gtfsposition?apikey=${process.env['TRANSLINK']}`;
  // request(url, function (error, response, body) {
  //   console.log('error:', error); // Print the error if one occurred
  //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //   console.log('body:', body); // Print the HTML for the Google homepage.
  // });
  res.send("Hello");
});

module.exports = app;
