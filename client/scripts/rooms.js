var Rooms = {

  currentRoom: false,

  add: function() {
    var roomName = prompt("Please enter room name!")
    RoomsView.renderRoom(roomName);
  }
};
