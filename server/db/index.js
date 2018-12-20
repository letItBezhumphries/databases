var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user: 'eric',
  password: 'chalon',
  database: 'chat',
  debug: true
});

//maybe module.exports.
// class Database {
//   constructor(config) {
//     this.connection = mysql.createConnection(config);
//   }
//   query(sqlString, args) {
//     return new Promise((resolve, reject) => {
//       this.connection.query(sqlString, args, (err, rows) => {
//         if(err) {
//           return reject(err); 
//         } else resolve(rows);
//       });
//     });
//   }
//   close() {
//     return new Promise((resolve, reject) => {
//       this.connection.end(err => {
//         if(err) 
//           return reject(err);
//           resolve()
//       });
//     });
//   }
// }



module.exports = connection;
