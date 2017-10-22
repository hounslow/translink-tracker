const express = require('express');
const request = require('request');
const app = express();
require('dotenv').config();

// respond with "hello world" when a GET request is made to the homepage
app.get('/api', (req, res) => {
  const url = `http://gtfs.translink.ca/gtfsposition?apikey=${process.env['TRANSLINK']}`;
  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
});
