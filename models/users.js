const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  // cuisine: { type: String, required: true },
  // favorites: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;