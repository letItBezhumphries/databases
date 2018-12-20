var db = require('../db');
//   

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', function (error, results, fields) {
        if (error) { throw error; }
        console.log('THE RESULTS:', results);   
        //callback(null, results); //null as first arg
      });
    }, // a function which produces all the messages from messages table
    post: function (callback) {
      db.query('INSERT INTO messages (id, text, user, room) VALUES (10, "One MORE another works more stuff!", 1, 1)', function (error, results, fields) { 
        if (error) { throw error; }
        console.log(error);
        // callback(results);
            
      });
    } // a function which can be used to insert a new message into the messages table
    
  },

  users: {
    // Ditto as above.
    get: function () {
      // let sql = 'SELECT * FROM users';
    }, //getting all the messages from a user specified
    post: function () {
      // let sql = 'INSERT INTO users SET ?';
    } //posting a new user to user tables 
  }
};

