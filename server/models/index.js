var db = require('../db');
//   

module.exports = {
  messages: {
    get: (callback) => {
      db.query('SELECT messages.id, messages.message, messages.roomname FROM messages', (error, results) => {
        if (error) { throw error; }
        console.log('THE RESULTS IN GET:', results); 
        callback(error, results); //null as first arg
      });
    }, // a function which produces all the messages from messages table
    post: (message, username, roomname, callback) => {
      db.query(`INSERT INTO messages (id, message, username, roomname) VALUES (null, '${message}', '${username}', '${roomname}')`, (error, results, fields) => { 
      //let values = [null, message, username, roomname];
      // db.query('INSERT INTO messages (id, message, username, roomname) VALUES (?)', `${values}`, (error, results, fields) => { 
        if (error) { throw error; }
        //'INSERT INTO messages VALUES()
        //INSERT INTO messages (id, text, user, room) VALUES (1, "In mercy\'s name, three days is all I need.", 1, 1);
        // console.log('THIS IS results.insertId: ', results.insertId);
        // console.log('THE RESULTS IN POST:', results); 
        callback(error, results);    
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

