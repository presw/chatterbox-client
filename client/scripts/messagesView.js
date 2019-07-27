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
        this.renderMessage(val);
      }
    })

  },

  renderMessage: function(message) {

    var messageObject = MessageView.render(message);

    $('#chats').append(messageObject);
  }
};