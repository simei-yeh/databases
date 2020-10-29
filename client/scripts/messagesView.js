var MessagesView = {
  /**
   * div DOM element
   */
  $chats: $('#chats'),

  /*
   * Function used callback to parse through message and call render in messageView
   * Arguments: data obtained from ajax, roomname obtained from initialize
   */
  checkRooms: function(data, roomname = null) {
    //Create an object to hold added rooms
    var addedRooms = {};

    // condition after selecting a room
    // if a room has been selected then add it as the first room so messages can be viewed
    //exclude from the for loop below so it does not get added twice

    if (roomname !== null) {
      //debugger;
      addedRooms[roomname] = true;
      RoomsView.renderRoom(roomname);
    }
    //Iterate through the data to add the list of rooms and add the messages
    for (let message of data.results) {
      //if the list of rooms doesn't have the roomname already, add it to the list
      if (addedRooms.hasOwnProperty(message['roomname']) === false) {
        //Calls renderRoom to add the room to the list of options
        RoomsView.renderRoom(message['roomname']);
        //add the roomname to the added rooms
        addedRooms[message['roomname']] = true;
      }

      //if roomname is null, renders all messages
      //otherwise, render messages with specified roomname
      if (roomname === null) {
        MessagesView.renderMessage(message);
      } else if (message['roomname'] === roomname) {
        MessagesView.renderMessage(message);
      }

    }

    MessagesView.friendUsername(roomname);
  },
  /*
   * Used to issue the GET call inside of parse.js and call checkRooms to parse the data
   */
  initialize: function(roomname = null) {
    this.clearMessageBox();
    // takes in a roomname. If no roomname then default val = null
    // loop through all data and render each message
    var callback = function(input) {
      this.checkRooms(input, roomname);
    };
    Parse.readAll(callback.bind(this));
  },


  /**
   * Add message to the DOM
   * Insert the message into the HTML template
   */
  renderMessage: function(message) {

    //debugger;
    // check if username is friend
    //if friend then send to renderHelper with true
    //else send to renderHelper with false
    if (Friends.friendsList[message['username']] !== undefined) {
      var html = MessageView.renderHelper(message, true);
    } else {
      var html = MessageView.renderHelper(message, false);
    }
    //Append the message to the chat
    this.$chats.append(html);
  },

  clearMessageBox: function() {
    this.$chats.empty();
  },

  /*
  * //adds event listener to add a friend
  * when event listener is trigger (click on friendname),
  * friend is added/removed to friendsList
  * rerun MessagesView to rerender friend's highlighted styling
  */
  friendUsername: function(roomname) {
    $('.username').on('click', (event) => {
      Friends.toggleStatus(event.target.innerText);
      MessagesView.initialize(roomname);
    });
  }

};
