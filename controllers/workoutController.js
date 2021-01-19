const { Router } = require("express");
const express = require("express");
const router = express.Router();

const db = require("../models");

// API Routes

// find all workouts
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to retrieve workouts.",
      });
    });
});

// find one workout
router.get("/api/workouts/:id", (req, res) => {
  db.Workout.findById(req.params.id)
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: `Failed to retrieve workout: ${req.params.id}`,
      });
    });
});

router.post("/api/workouts/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Could not create new workout",
      });
    });
});

// update one workout
router.put("/api/workouts/workouts", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercise: req.body } },
    { new: true }
  )
    .then((updateWorkout) => {
      res.json(updateWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Could not create update workout, sorry I'm so dumb",
      });
    });
});

// module exports router

module.exports = router;
