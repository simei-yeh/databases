var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT username FROM users;', (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  },


  create: function (username, callback) {
    db.query(`INSERT INTO users (username) VALUES ${username};`, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  }
};
