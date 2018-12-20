var db = require('../db');



module.exports = {
  messages: {
    get: (callback) => {
      db.query('SELECT messages.id, messages.message, messages.roomname FROM messages', (error, results) => {
        if (error) { throw error; }
        console.log('THE RESULTS IN GET:', results); 
        callback(error, results); //null as first arg
      });
    }, // a function which produces all the messages from messages table
    post: (callback) => {
      db.query('INSERT INTO messages SET ?', results.insertId, (error, results, fields) => { 
        if (error) { throw error; }
        console.log('THE RESULTS IN POST:', results); 
        console.log('FIELDS IN POST', fields);
        callback(error, results);    
      });
    } // a function which can be used to insert a new message into the messages table
    
  },

  users: {
    // Ditto as above.
    get: function () {}, //getting all the messages from a user specified
    post: function () {} //posting a new user to user tables 
  }
};

