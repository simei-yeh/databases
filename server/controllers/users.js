var models = require('../models');

module.exports = {
  get: function (req, res) {
    //call models for users list
    models.users.getAll((err, data) => {
      if (err) {res.sendStatus(400);
      } else {
        res.status(200).json(data);
        res.end();
      }
    })
  },

  post: function (req, res) {
    models.users.create(req.body, (err, data) => {
      if (err) {res.sendStatus(400);
      } else {
        res.status(204);
        res.end();
      }
    })
  }
};
