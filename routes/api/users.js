const router = require("express").Router();
// const { check, validationResult } = require('express-validator');
const userController = require("../../controllers/userController");

// Matches with "/api/chef"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

  module.exports = router;
