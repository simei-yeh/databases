var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//run the sql query
//if request is for all messages, return messages and friend information
//else if request is for users, return all users

dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});
dbConnection.connect();



module.exports = {
  dbConnection
}

/*
  addUser: function(username) {
    dbConnection.end();
  }

  getAllMessages: function() {
    var dbConnection;
    dbConnection = mysql.createConnection({
      user: 'root',
      database: 'chat'
    });
    dbConnection.connect();

    dbConnection.end();
  }

  addMessage: function(user, chatroom, message) {
    var dbConnection;
    dbConnection = mysql.createConnection({
      user: 'root',
      database: 'chat'
    });
    dbConnection.connect();
    dbConnection.end();
  }
}
*/