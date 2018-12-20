var models = require('../models');
const parser = require('body-parser');
var request = require('request');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*', //
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('GETTING MESSAGES:', req.body);
      models.messages.get((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(JSON.stringify(results));
        } 
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(body, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.end(JSON.stringify(results));
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

