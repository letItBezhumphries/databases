var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages from messages table
  
    // read from database.  wrapping a select query in a javascript command
    post: function () {} // a function which can be used to insert a new message into the messages table
    
  },

  users: {
    // Ditto as above.
    get: function () {}, //getting all the messages from a user specified
    post: function () {} //posting a new user to user tables 
  }
};

