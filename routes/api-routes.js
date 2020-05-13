// Requiring our models and passport as we've configured it
const db = require("../models");
var passport = require("../config/passport");
const { Op } = db.Sequelize;

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.status(200).json({
      email: req.user.email,
      name: req.user.name,
      bio: req.user.bio,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then(function (user) {
        // res.redirect(307, "/api/login");
        res.status(200).send({
          email: user.email,
          name: user.name,
          bio: user.bio
        });
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({ user: null });
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        user: {
          name: req.user.name,
          email: req.user.email,
          // id: req.user.id,
          bio: req.user.bio,
        },
      });
    }
  });

  app.get("/api/videos", async (req, res) => {
    console.log(req.query);
    try {
      if (req.query.id) {
        let videoId = req.query.id;
        let video = await db.Video.findAll({
          include: {
            model: db.Genre,
            through: {
              attributes: [],
            },
          },
          where: {
            id: videoId,
            user_id: 1, // ******* this will change when auth is working *******
          },
        });
        res.status(200).json(video);
      } else if (req.query.genres) {
        let genres = req.query.genres.split(",").map((genre_id) => +genre_id);
        let optionsObj = {
          include: [
            {
              model: db.Genre,
              as: "genres",
              through: {
                attributes: [],
              },
            },
            {
              model: db.Genre,
              as: "filter_genres",
              through: {
                attributes: [],
              },
              attributes: [],
            },
          ],
          where: {
            "$filter_genres.id$": {
              [Op.in]: genres,
            },
          },
        };
        for (let i = 0; i < genres.length; i++) {}
        let video = await db.Video.findAll({
          include: [
            {
              model: db.Genre,
              as: "genres",
              through: {
                attributes: [],
              },
            },
            {
              model: db.Genre,
              as: "filter_genres",
              through: {
                attributes: [],
              },
              attributes: [],
            },
          ],
          where: {
            "$filter_genres.id$": {
              [Op.in]: genres,
            },
          },
        });
        res.status(200).json(video);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  app.get("/api/videos/:id", async (req, res) => {
    try {
      let videoId = req.params.id;
      let video = await db.Video.findAll({
        include: {
          model: db.Genre,
          as: "genres",
          through: {
            attributes: [],
          },
        },
        where: {
          id: videoId,
          user_id: 1, // ******* this will change when auth is working *******
        },
      });
      res.status(200).json(video);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  app.get("/api/borrowed", async (req, res) => {
    try {
      let videos = await db.Video.findAll({
        include: {
          model: db.Genre,
          through: {
            attributes: [],
          },
        },
        where: {
          user_id: 1, // ******* this will change when auth is working *******
          is_borrowed: true,
        },
      });
      res.status(200).json(videos);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  app.post("/api/videos", async (req, res) => {
    try {
      let video = await db.Video.create({
        user_id: 1, // ******* this will change when auth is working *******
        adult: req.body.adult,
        backdrop_path: req.body.backdrop_path,
        posterPath: req.body.poster_path,
        tmd_id: req.body.id,
        imdb_id: req.body.imdb_id,
        original_title: req.body.original_title,
        overview: req.body.overview,
        popularity: req.body.popularity,
        relase_date: req.body.release_date,
        runtime: req.body.runtime,
        is_borrowed: req.body.is_borrowed,
        is_lent: req.body.is_lent,
        tagline: req.body.tagline,
        title: req.body.title,
        vote_average: req.body.vote_average,
        vote_count: req.body.vote_count,
        video_type: req.body.video_type,
        lend_borrow_name: req.body.lend_borrow_name,
        lend_borrow_date: req.body.lend_borrow_date,
        foo: "bar",
      });
      if (req.body.genres) {
        await video.addGenres(req.body.genres);
      }
      res.json(video.id);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });
};
