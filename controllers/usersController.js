const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

/**
 * Root POST route to create a new user.
 */
router.post("/", async (req, res) => {
  try {
    const email = req.body.email ? req.body.email.trim() : "";
    const password = req.body.password || "";
    const name = req.body.name || "";
    if (!(name && email && password)) {
      return res.status(409).json({
        success: false,
        message: "Enter valid name, email, and password."
      })
    }
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
          // exp: Math.floor(Date.now() / 1000) + 60 /*//-- * 60 --//*/,
          expiresIn: "7d",
        },
        process.env.REACT_APP_SESSION_SECRET
      );
      console.log(token);
      return res.json({
        success: true,
        data: token,
      });
    } else {
      return res.status(409).json({
        success: false,
        message: "Unable to create user account."
      });
    }
  } catch (err) {
    if (err instanceof db.Sequelize.UniqueConstraintError) {
      console.log(err);
      return res.status(409).json({
        success: false,
        message: "This email address is already in use.",
      });
    } else {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Unable to process signup request.",
      });
    }
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
