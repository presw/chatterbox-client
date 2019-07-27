var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var messageText = $('#message').val();
    var roomname = $('#rooms select').val();
    var messageObj = { username: App.username, roomname: roomname, text: messageText};
    Parse.create(messageObj);
    MessagesView.renderMessage(messageObj);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
