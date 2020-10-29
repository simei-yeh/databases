/**
 * Takes messages and changes it to HTML
 */
var MessageView = {


  //takes in a message and checks username, roomname, text
  //insert placeholder for any undefined information
  //Calls the render with the new placeholder properties
  renderHelper: function(message, friendBool) {
    if (!message["username"]) {
      message["username"] = "anonymous";
    }

    if (!message["text"]) {
      message["text"] = "";
    }

    if (!message["roomname"]) {
      message["roomname"] = "";
    }

    if (friendBool) {
      return this.renderFriend(message);
    } else {
      return this.render(message);
    }

  },
  /**
   * Create single message?
   * templates uses <%--objectProperty--%> to insert stuff
   * template returns a function, takes in the JSON object
   */
  render: _.template(`
      <div class="chat <%-roomname%>">
        <div class="username"><%-username%></div>
        <div><%-text%></div>
      </div>
    `),
  //   render: _.template(`
  //   <div class="chat <%=roomname%>">
  //     <div class="username"><%-username%></div>
  //     <div><%=text%></div>
  //   </div>
  // `)
  renderFriend: _.template(`
  <div class="chat <%-roomname%>">
    <div class="username friend"><%-username%></div>
    <div><%-text%></div>
  </div>
  `)
};