const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

/**
 * Root POST route to create a new user.
 */
router.post("/", (req, res) => {
  const email = req.body.email ? req.body.email.trim() : "";
  const password = req.body.password || "";
  const name = req.body.name || "";

  if (email && password && name) {
    db.User.create({ name, email, password })
      .then((newUser) => {
        const token = jwt.sign(
          {
            name: newUser.name,
            email: newUser.email,
            id: newUser.id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          },
          process.env.REACT_APP_SESSION_SECRET
        );
        console.log(token);
        res.json({
          success: true,
          data: token,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          success: false,
          message: "Failed to create new user.",
        });
      });
  } else {
    res.status(500).json({
      success: false,
      message: "Please enter a valid name, email, and password.",
    });
  }
});

router.put("/", (req, res) => {
  console.log(req.body);
  const { name, email, password, bio } = req.body;
  // const { id } = req.params;
  db.User.update({ name, email, password, bio }, { where: { id: 1 } }) // **** temporarily hard coded ***
    .then((rowsUpdated) => {
      res.json({
        success: true,
        data: rowsUpdated,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Failed to save user data.",
      });
    });
});

module.exports = router;
