const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  name: { type: String, require: [true, "Name cannot be empty"] },
  date: { type: String, require: [true, "Must have a date to store"] },
  meal: { type: String },
  rating: { type: Number },
  description: { type: String, maxLength: 200 },
});
// future carbs, fibger, fats, proteins, quantity
// validation check

const Log = mongoose.model("food_log", LogSchema);

module.exports = Log;
