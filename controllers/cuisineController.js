const db = require("../models");

// Defining methods for the chefController
module.exports = {
  findAll: function(req, res) {
    db.Cuisine
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Cuisine
      .create(req.body)
      .then(Chef => res.json(Chef))
      .catch(err => res.status(422).json(err));
  },
}