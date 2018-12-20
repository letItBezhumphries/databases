var models = require('../models');
var parser = require('body-parser');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((error, results) => {
        // console.log('THIS GET REQ.BODY', req.body);
        if (error) {
          console.log(error);
        } else {
          res.send(JSON.stringify(results));
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {  
      models.messages.post((error, results) => {
        if (error) {
          //console.log("YOU GOT AN ERROR in REQ.BODY: ", error);
        } else {
          //console.log('THIS POST REQ.BODY', req.body);
          res.send(JSON.stringify(results));
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

