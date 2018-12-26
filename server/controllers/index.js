var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(JSON.stringify(results));
        } 
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('inside the post request');
      // res.type('plain/text');
      var message = req.body;
      console.log(message[0]);
      var params = [ req.body['text'], req.body['username'], req.body['roomname'] ];
      models.messages.post(params, (err, results) => {
        console.log('&&&&&&&&', results);
        if (err) {
          console.log(err);
        } else {
          res.send(JSON.stringify(results));
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(JSON.stringify(results));
        }
      }); 
    },
    post: function (req, res) {
      var params = [ req.body[username] ];
      models.users.post(params, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(JSON.stringify(results));
        }
      });
    }
  }
};
