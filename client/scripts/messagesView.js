var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.render();

  },

  render: function() {
    Parse.readAll((data) => {
      // Alt for loop for testing
      // for (var i = 15; i < data.results.length; i++) {
      //   this.renderMessage(data.results[i]);
      // }
      for (var val of data.results) {
        if (!val.text.includes('<script>')) {
          if (!val.username) {
            val.username = "Silly Spy"
          }
          if (!val.text) {
            val.text = "STUPID! STUPID! STUPID!"
          }
          this.renderMessage(val);
        }
      }
    })
  },

  renderMessage: function(message) {

    var messageObject = MessageView.render(message);

    $('#chats').append(messageObject);
  }
};