var db = require('../db');

module.exports = {
  getAll: function () {  // a function which produces all the messages
    //sends request to get data
    //formats data
    //returns data
    db.getAllMessages((err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  },

  create: function () { } // a function which can be used to insert a message into the database
    //connect to the sql database
};
