var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.render();
  },

  render: function() {
    Parse.readAll((data) => {

      var lastMessageIndex = data.results.length;

      // find last message
      for (var i = 0; i < data.results.length; i++) {
        var val = data.results[i];
        if (val.objectId === Messages.lastMessage.objectId) {
          lastMessageIndex = i;
          break;
        }
      }

      for (var i = lastMessageIndex - 1; i >= 0; i--) {
        var val = data.results[i];

        if (!val.text || !val.text.includes('<script>')) {
          if (!val.username) {
            val.username = "Silly Spy"
          }
          if (!val.text) {
            val.text = "STUPID! STUPID! STUPID!"
          }
          this.renderMessage(val);
        }
      }
      Messages.lastMessage = data.results[0];
    });
  },

  renderMessage: function(message) {
    var messageObject = MessageView.render(message);
    $('#chats').prepend(messageObject);
  }
};

// Click handlers:
$('#chats').on('click', '.username', function() {Friends.toggleStatus();});
