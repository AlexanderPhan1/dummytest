const db = require("../models");

// Defining methods for the chefController
module.exports = {
  findAll: function(req, res) {
    db.Chef
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findCityCuisine: function(req,res) {
    db.Chef
      .find({city: req.params.city, foods: req.params.cuisine})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Chef
      .findById(req.params.id)
      .then(Chef => res.json(Chef))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Chef
      .create(req.body)
      .then(Chef => res.json(Chef))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Chef
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Chef
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
