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
        if (!roomStorage.hasOwnProperty(val.roomname)) {
          roomStorage[val.roomname] = val.roomname;
          this.renderRoom(val.roomname);
        }
      }
    })
  },

  renderRoom: function(roomname) {
    // var roomname = RoomsView.render(message);

    this.$select.append(`<option value = "${roomname}">${roomname}</option>`);
  }
};
