var db = require('../db');
   

module.exports = {
  messages: {
    get: function(callback) { // a function which produces all the messages from messages table
      var queryStr = 'SELECT messages.id, messages.text, messages.roomname FROM messages \
                      LEFT OUTER JOIN users ON (messages.userid = users.id) \
                      ORDER BY messages.id DESC';
      db.query(queryStr, function(error, results) {        
        callback(error, results); 
      });
    }, 
    post: (params, callback) => { //add message from params to the database
      var queryStr = 'INSERT INTO messages(text, userid, roomname) VALUES(?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?)';
      db.query(queryStr, params, function(error, results) { 
        console.log('^^^^^', params);
        callback(error, results);    
      });
    } 
  },

  users: {
    get: function (callback) { //getting all the users in users table
      var queryStr = 'SELECT * FROM users';
      db.query(queryStr, (err, results) => {
        callback(err, results);
      });
    }, 
    post: (params, callback) => { //creating a new user and adding to users tables 
      var queryStr = 'INSERT INTO users(id, username) VALUES (null, ?)';
      db.query(queryStr, params, (err, results) => {
        callback(err, results);
      });
    } 
  }
};

