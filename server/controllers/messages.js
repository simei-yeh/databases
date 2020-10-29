var models = require('../models');

module.exports = {
  get: function (req, res) {
    //call models for users list
    models.messages.getAll((err, data) => {
      if (err) {res.sendStatus(400);
      } else {
        res.status(200).json(data);
        res.end();
      }
    })
  },
  post: function (req, res) { // a function which handles posting a message to the database
  //call model.messages.create
  //include request information
    models.messages.create({
      username: 'Valjean',
      message: 'In mercy\'s name, three days is all I need.',
      roomname: 'Hello'
    }, (err, data) => {
      console.log('request', req, req.body);
      if (err) {res.sendStatus(400);
      } else {
        res.status(200).json(data);
        res.end();
      }
    })
  }
};
