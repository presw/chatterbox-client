var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
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
    // App.fetch((data) => iterate the messages array

    // expects an object
    // parses the object using MessageView.render
    var test = MessageView.render(message);
    // console.log(test);
    $('#chats').append(test);

    // Parse.readAll((data) => {
    //   for (var val of data.results) {
    //     $('#chats').append(MessageView.render(val));
    //   }
    // });
  }
};