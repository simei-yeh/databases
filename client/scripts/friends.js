/*
* either list of friends or whether you are friends?
*/
var Friends = {
  //Storage for friends
  friendsList: {},
  /**
   * toggleStatus adds a friend to the friends list if they aren't on there
   *  removes the friend from the friends list if they are there already
   */
  toggleStatus: function(name = undefined) {
    //adds a person to a list of friends
    //if the person is already a friend then untoggle them
    //sends a list back to messagesView to highlight user
    if (Friends.friendsList[name] === undefined) {
      Friends.friendsList[name] = true;
    } else {
      delete Friends.friendsList[name];
    }

  }
};

