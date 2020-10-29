/**
 * Probably store single messages
 * Josh: manages message state
 */
var Messages = {

  //takes in a submission from the formView and returns in correct message format
  //calls Parse.create to send the message into the DOM
  convertMessage: function(submission) {

    var message = {};

    message.username = App.username;
    message.text = submission;
    //update roomname for late; need to update rooms to take in a room
    message.roomname = Rooms.currentRoomname;

    Parse.create(message, function() {console.log("Message submitted!");});
  }


};