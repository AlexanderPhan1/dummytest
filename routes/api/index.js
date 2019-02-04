const router = require("express").Router();
const chefRoutes = require("./chefs");
const userRoutes= require("./users");

// Book routes
router.use("/chefs", chefRoutes);
router.use("/users", userRoutes);

module.exports = router;
