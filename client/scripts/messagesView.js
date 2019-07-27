var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.render();
  },

  render: function() {
    Parse.readAll((data) => {
      for (var val of data.results) {
        if (!val.text || !val.text.includes('<script>')) {
          if (!val.username) {
            val.username = "Silly Spy"
          }
          if (!val.text) {
            val.text = "STUPID! STUPID! STUPID!"
          }
          this.appendMessage(val);
        }
      }
    });
  },

  appendMessage: function(message) {

    var messageObject = MessageView.render(message);
    $('#chats').append(messageObject);
  },

  renderMessage: function(message) {
    var messageObject = MessageView.render(message);
    $('#chats').prepend(messageObject);
  }
};

// Click handlers:
$('#chats').on('click', '.username', function() {Friends.toggleStatus();});
