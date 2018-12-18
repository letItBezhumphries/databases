var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log(req.body);

      //this is a SELECT wrapped in express request
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('1: NPM TESTING: ', req.body);  
      console.log('2: NPM TESTING: %s %s', req.method, req.path);
    } // a function which handles posting a message to the database
    // some form of database UPDATE wrapped in javascript express
    //  router.post('/messages', controller.messages.post);
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

