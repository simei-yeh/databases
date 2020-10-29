var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.getAllUsers((err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  },

  
  create: function () {}
};
