// Requiring necessary npm packages
require("dotenv").config();
const express = require("express");
const path = require("path");
const AuthController = require("./controllers/authController");
const UsersController = require("./controllers/usersController");
// var session = require("express-session");
// // Requiring passport as we've configured it
// var passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/auth", AuthController);
app.use("/api/user", UsersController);
app.use(express.static("client/build"));

// Requiring our routes
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});