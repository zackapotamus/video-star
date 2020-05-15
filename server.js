// Requiring necessary npm packages
require("dotenv").config();
var express = require("express");
var path = require("path");
// var session = require("express-session");
// Requiring passport as we've configured it
// var passport = require("./config/passport");
const AuthController = require("./controllers/authController");
const UserController = require("./controllers/usersController");
const SearchController = require("./controllers/searchController");
const VideoController = require("./controllers/videoController");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("public"));
}

// Requiring our routes
// require("./routes/api-routes.js")(app);
app.use("/api/auth", AuthController);
app.use("/api/user", UserController);
app.use("/api/search", SearchController);
app.use("/api/videos", VideoController);

// Serve all the routes through 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ }).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});