// require dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require("dotenv").config();

//port
//port.env.PORT lets the port be set by HEROKU
const PORT = process.env.PORT || 3000;

// create express app instance
const app = express();

// HTTP express middleware
app.use(logger("dev"));

// static content comes from the public folder
app.use(express.static("public"));

// set up the express app for data Handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// route access
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// server starts and listens for requests from the client
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
