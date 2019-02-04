const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cuisineSchema = new Schema({
  cuisine: { type: String, required: true },
  image: { type: String, required: true },
  
  date: { type: Date, default: Date.now }
});

const Cuisine = mongoose.model("Cuisine", cuisineSchema);

module.exports = Cuisine;
