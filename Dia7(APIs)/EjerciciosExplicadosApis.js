//Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
const request = require('request');
request('http://www.google.com', function(error, response, body){
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});