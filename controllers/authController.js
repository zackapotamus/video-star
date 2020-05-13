const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

/**
 * Root POST route to validate user credentials.
 */
router.post("/", async (req, res) => {
  try {
    let user = await db.User.findOne({
      where: {
        email: req.body.email.trim()
      }
    });
    if (user && user.validPassword(req.body.password)) {
      const token = jwt.sign({
        name: user.name,
        email: user.email,
        id: user.id,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      process.env.REACT_APP_SESSION_SECRET);
      console.log(token);
      res.json({
        success: true,
        data: token,
      })
    } else {
      res.status(403).json({
        success: false,
        message: "Invalid credentials."
      })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to authenticate the user."
    });
  }
});

module.exports = router;