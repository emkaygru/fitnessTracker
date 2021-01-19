const mongoose = require("mongoose");

const Schema = mongoose.schema;

const workoutSchema = new Schema({
  // name, type, weight, sets, reps, and duration
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your workout",
  },
  type: {
    type: String,
    trim: true,
    required: "Enter a type of workout",
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
    required: "Enter the number of sets you did during your workout",
  },
  reps: {
    type: Number,
    required: "Enter the number of reps you did during your workout",
  },
  duration: {
    type: Number,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
