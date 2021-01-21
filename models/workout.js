// dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    // name, type, weight, sets, reps, and duration
    day: {
      type: Date,
      default: new Date(),
    },
    exercise: [
      {
        type: {
          type: String,
          trim: true,
          required: "Your exercise type is required.",
        },
        name: {
          type: String,
          trim: true,
          required: "Exercise name is required.",
        },
        duration: {
          type: Number,
          required: true,
        },
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number,
      },
    ],
  },
  {
    toJSON: { virtuals: true },
  }
);

// total duration of each workout
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
