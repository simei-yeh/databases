var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//run the sql query
//if request is for all messages, return messages and friend information
//else if request is for users, return all users

module.exports = {
  getAllUsers: function() {
    var dbConnection;
    dbConnection = mysql.createConnection({
      user: 'root',
      database: 'chat'
    });
    dbConnection.connect();
    dbConnection.query('SELECT username FROM users;', (err, res) => {
      if (err) {throw err;
      } else {
        return res;
      }
    });
    dbConnection.end();
  }

  addUser: function(username) {
    var dbConnection;
    dbConnection = mysql.createConnection({
      user: 'root',
      database: 'chat'
    });
    dbConnection.connect();
    dbConnection.query(`INSERT INTO users (username) VALUES ${username};`, (err, res) => {
      if (err) {throw err;
      } else {
        return res;
      }
    });
    dbConnection.end();
  }

  getAllMessages: function() {
    var dbConnection;
    dbConnection = mysql.createConnection({
      user: 'root',
      database: 'chat'
    });
    dbConnection.connect();
    dbConnection.query(`SELECT text, roomname, username FROM messages
    INNER JOIN chatroom ON chatroom.id = messages.chatroom_id
    INNER JOIN users ON messages.user_id = users.id;`, (err, res) => {
      if (err) {throw err;
      } else {
        return res;
      }
    });
    dbConnection.end();
  }

  addMessage: function(user, chatroom, message) {
    var dbConnection;
    dbConnection = mysql.createConnection({
      user: 'root',
      database: 'chat'
    });
    dbConnection.connect();
    dbConnection.query(
      //insert a user if none exists in users table
      //insert a chatroom if none exists in chatroom table
      //find relevant chatroom and user and enter message, chatroom name, and username into messages table
    `INSERT INTO users (username) SELECT '${user}' WHERE NOT EXISTS (SELECT DISTINCT (username) FROM users WHERE username = '${user}');
    INSERT INTO chatroom (roomname) SELECT '${chatroom}' WHERE NOT EXISTS (SELECT DISTINCT (roomname) FROM chatroom WHERE roomname = '${chatroom}');
    INSERT INTO messages (text, chatroom_id, user_id) VALUES ('${text}', (SELECT chatroom.id FROM chatroom WHERE roomname = '${chatroom}'), (SELECT id FROM users WHERE username = '${user}'));
    `, (err, res) => {
      if (err) {throw err;
      } else {
        return res;
      }
    });
    dbConnection.end();
  }
}
