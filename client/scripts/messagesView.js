var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.render();
  },

  render: function(roomname = Rooms.currentRoom, refresh = false) {
    // Render should reset lastMessage when passing true;

    Parse.readAll((data) => {
      let messages = data.results;

      let lastMessageIndex = messages.length;

      // find last message displayed
      for (let i = 0; i < messages.length; i++) {
        let messageObj = messages[i];
        if (messageObj.objectId === Messages.lastMessage.objectId) {
          lastMessageIndex = i;
          break;
        }
      }

      if (refresh) {
        $('#chats').html('');
        lastMessageIndex = messages.length;
      }

      // display new messages
      for (let i = lastMessageIndex - 1; i >= 0; i--) {
        let messageObj = messages[i];

        if (!messageObj.text || !messageObj.text.includes('<script>')) {
          if (!messageObj.username) {
            messageObj.username = "anon";
          }
          if (!messageObj.text) {
            messageObj.text = "STUPID! STUPID! STUPID!"
          }
          if (Rooms.roomname) {
            if (Rooms.roomname === messageObj.roomname) {
              this.renderMessage(messageObj);
            }
          } else {
            this.renderMessage(messageObj);
          }
        }
      }
      Messages.lastMessage = data.results[0];
    });
  },

  renderMessage: function(message) {
    let messageObject = MessageView.render(message);
    $('#chats').prepend(messageObject);
  }
};

// Click handlers:
$('#chats').on('click', '.username', function() {Friends.toggleStatus();});
