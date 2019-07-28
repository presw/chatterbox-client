var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.render();
  },

  render: function() {
    Parse.readAll((data) => {
      var roomStorage = {}
      for (var val of data.results) {
        if (typeof val.roomname !== 'undefined' && val.roomname !== null && !val.roomname.includes('<script>')) {
          if (!roomStorage.hasOwnProperty(val.roomname)) {
            roomStorage[val.roomname] = val.roomname;
            this.renderRoom(val.roomname);
          }
        }
      }
    })
  },

  renderRoom: function(roomname) {
    // var roomname = RoomsView.render(message);

    this.$select.append(`<option value = "${roomname}">${roomname}</option>`);
  }
};

//click handler

$('#rooms').on('click', 'button', function() { Rooms.add(); });

$('select').on('change', function() {
  Rooms.currentRoom = $('#room-select').val();
  MessagesView.render(Rooms.currentRoom, true);
});
