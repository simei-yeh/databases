var db = require('../db');

module.exports = {
  getAll: function (callback) {  // a function which produces all the messages
    //sends request to get data
    //formats data
    //returns data
    db.connection.query(`SELECT messages.text, chatroom.roomname, users.username FROM messages
    INNER JOIN chatroom ON chatroom.id = messages.chatroom_id
    INNER JOIN users ON messages.user_id = users.id;`, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  },

  create: function (message, callback) { // a function which can be used to insert a message into the database
    //connect to the sql database
    console.log('messages create', message.message, message.roomname,);

      //insert a user if none exists in users table
      //insert a chatroom if none exists in chatroom table
      //find relevant chatroom and user and enter message, chatroom name, and username into messages table
      //INSERT INTO users (username) SELECT '${message.username}' WHERE NOT EXISTS (SELECT DISTINCT (username) FROM users WHERE username = '${message.username}');

      //`INSERT INTO chatroom (roomname) SELECT '${message.roomname}' WHERE NOT EXISTS (SELECT DISTINCT (roomname) FROM chatroom WHERE roomname = '${message.roomname}');`, (err, res) => {
    db.connection.query(`INSERT INTO messages (text, chatroom_id, user_id) VALUES ('${message.message}', (SELECT chatroom.id FROM chatroom WHERE roomname = '${message.roomname}' limit 1), (SELECT id FROM users WHERE username = '${message.username}' limit 1));`, (err, res) => {
        if (err) {
            callback(err);
         } else {
           callback(null, res);
        }
    });
  }

};
