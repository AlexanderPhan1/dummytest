const router = require("express").Router();
// const { check, validationResult } = require('express-validator');
const cuisineController = require("../../controllers/cuisineController");

// Matches with "/api/cuisines"
router.route("/dashboard")
  .get(cuisineController.findAll);
 


  module.exports = router;