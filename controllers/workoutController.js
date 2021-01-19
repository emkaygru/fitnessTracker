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
