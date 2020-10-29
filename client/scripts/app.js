/**
 * Creates the main display, started in chatter box
 */
var App = {
  $spinner: $('.spinner img'),

  username: 'anonymous',

  /**
   * Starts the FormView, RoomsView,MessagesView
   */
  initialize: function() {
    //Sets the user name in the app?
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },
  /**
   * Grabs the messages from the server?
   */
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      callback();
    });
  },
  /**
   * Allow for form submission/Initialize visual
   */
  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },
  /**
   * Turn off form submision, turn off visual
   */
  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
