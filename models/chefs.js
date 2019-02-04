const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chefSchema = new Schema({
  chefName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  city: {type: String, required: true},
  bio: {type: String},
  date: { type: Date, default: Date.now},
  availability: { type: String, required: true},
  range: { type: Number, required: true},
  menu: {type: String, required: true },
  foodimg: {type: String},
  profilepic:{type: String},
  cuisines: {type: String, }
  // menu: {type: File, required: true }

  // firstname: { type: String, required: true },
  // lastname: { type: String, required: true },
  // email: { type: String, required: true },
  // password: { type: String, required: true},
  // city: { type: String, required: true },
  // bio: String,
  // date: { type: Date, default: Date.now },
  // servingMin: {type: Number, required: true},
  // servingMax: {type: Number,required: true},
  // phone: String,
  // meals: { dinner: String, 
  //          lunch: String,
  //          breakfast: String }
});

const Chef = mongoose.model("Chef", chefSchema);

module.exports = Chef;
