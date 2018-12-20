var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('THIS GET REQ.BODY', req.body);
      models.messages.get((error, results) => {
        if (error) {
          console.log(error);
        } else {
          res.send(JSON.stringify(results));
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('THIS POST REQ.BODY', req.body);
      models.messages.post((error, results) => {
        if (error) {
          console.log(error);
        } else {
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

