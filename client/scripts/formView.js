var FormView = {

  $form: $('form'),
  /**
   * Calls handleSubmit() when submit is clicked
   * initalize creates a 'submit' event listener on the form
   */
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },
  /**
   * Executed when submit is clicked
   */
  handleSubmit: function(event) {
    //Stop the browser from submitting the form
    event.preventDefault();
    //Grab message from text box
    var submission = $("#message").serializeArray();
    //Calls convertMessage() in messages.js to convert the message
    Messages.convertMessage(submission[0].value);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};