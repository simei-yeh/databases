var Parse = {

  server: `http://127.0.0.1:3000/classes/messages`,
  /**


   * Submit a POST request and send a message?
   */
  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    //use underscore template to customize the ajax call
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
      /*
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
      */
    });
  },
  /**
   * Get messages from PARSE
   * /movies/search?year=2010&actor=Carrey
   */
  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: search = {order: '-createdAt'},
      // data: where = {roomname: {
      //   '$exists' : true
      //     }
      //   },
      // data: {limit: '200',skip: '400'},
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};