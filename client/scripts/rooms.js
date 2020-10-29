/**
 * Probably store rooms
 */
var Rooms = {
  //Has add property
  currentRoomname: '',
  //Retrieve what rooms there are?
  add: function(roomname) {
    //Present the user with a pop-up box that takes in the name of the room
    //Adds the room to the drop down menu
    RoomsView.renderRoom(roomname);
    this.currentRoomname = roomname;
  },

  updateRoomname: function(roomname) {
    this.currentRoomname = roomname;
  }
};