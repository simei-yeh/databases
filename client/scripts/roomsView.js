var RoomsView = {
  //DOM element, addRoom button
  $button: $('#rooms button'),
  //DOM element room drop down
  $select: $('#rooms select'),

  /**
   * ?
   */
  initialize: function() {
    this.clearRoomsView();
    // add event listeners for adding rooms through "add" button and "select" dropdown
    this.$button.on("click", function() {
      var addRoomString = prompt("What room do you want to add?" || null);
      Rooms.add(addRoomString);
    });

    this.$select.on("change", (event) => {
      //event = name of the room
      var room = event.target.value;
      Rooms.updateRoomname(room);
      this.clearRoomsView();
      MessagesView.initialize(room);
    });
  },
  /**
   * Add messages to the DOM
   */
  renderRoom: function(name) {
    // takes in room name and adds to the DOM dropdown select element
    this.$select.append('<option value ="' + name + '">' + name + '</option>');
  },

  clearRoomsView: function() {
    this.$select.empty();
  }

};
