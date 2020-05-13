const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

/**
 * Root POST route to validate user credentials.
 */
// Login
router.post("/", async (req, res) => {
  try {
    let user = await db.User.findOne({
      where: {
        email: req.body.email.trim(),
      },
    });
    if (user && user.validPassword(req.body.password)) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
          id: user.id,
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        process.env.REACT_APP_SESSION_SECRET
      );
      console.log(token);
      res.json({
        success: true,
        data: token,
      });
    } else {
      res.status(403).json({
        success: false,
        message: "Invalid credentials.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to authenticate the user.",
    });
  }
});

router.post("/signup", async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let user = await db.User.create({
      name,
      email,
      password,
    });
    if (user) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
          id: user.id,
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        process.env.REACT_APP_SESSION_SECRET
      );
      console.log(token);
      res.json({
        success: true,
        data: token,
      });
    } else {
      res.status(409).json({
        success: false,
        message: "Unable to create user account."
      });
    }
  } catch (err) {
    if (err instanceof db.Sequelize.UniqueConstraintError) {
      console.log(err);
      res.status(409).json({
        success: false,
        message: "This email address is already in use.",
      });
    } else {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Unable to process signup request.",
      });
    }
  }
});

module.exports = router;
