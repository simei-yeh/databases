var db = require('../db');



module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT username FROM users;', (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  },


  create: function (input, callback) {

    db.connection.query(`INSERT INTO users (username) SELECT '${input.username}' WHERE NOT EXISTS (SELECT DISTINCT (username) FROM users WHERE username = '${input.username}');`, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  }
};
