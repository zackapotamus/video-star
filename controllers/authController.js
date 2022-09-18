const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const withAuth = require("../middleware");

/**
 * Root POST route to validate user credentials.
 */
// Login
router.post("/login", async (req, res) => {
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
          // exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
          expiresIn: "7d",
        },
        process.env.REACT_APP_SESSION_SECRET
      );
      // issue token
      res.status(200).cookie('token', token, { httpOnly: true }).json({
        success: true,
        data: token
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

// router.get("/", withAuth, async (req, res) => {
//   try {
//     // let token = req.query.token;
//     // let authenitcatedUser = jwt.verify(token, process.env.REACT_APP_SESSION_SECRET);
//     let user = await db.User.findOne({
//       where: {
//         id: req.id
//       }
//     });
//     res.json({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       bio: user.bio
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: "Unable to process request"
//     });
//   }
// });

// let's go ahead and remove the cookie on logout too, right?
router.post("/logout", async (req, res) => {
  try {
    res.status(200).clearCookie('token', { httpOnly: true }).json({
      success: true,
      message: "Logged out."
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Unable to process request."
    });
  }
});

// router.put("/", withAuth, async (req, res) => {
//   let { name, email, bio } = req.body;
//   // let token = req.query.token;
//   // let authenticateduser = jwt.verify(token, process.env.REACT_APP_SESSION_SECRET);
//   let result = await db.User.update({
//     name,
//     email,
//     bio
//   }, {
//     where: {
//       id: req.id
//     }
//   });
//   res.json({
//     success: true,
//     message: "User updated.",
//     data: result
//   });
// });

router.post("/signup", async (req, res) => {
  try {
    // let { name, email, password } = req.body;
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
          // exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
          expiresIn: "7d",
        },
        process.env.REACT_APP_SESSION_SECRET
      );
      // console.log(token);
      return res.status(200).cookie('token', token, { httpOnly: true }).json({
        success: true,
        data: token
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

module.exports = router;
