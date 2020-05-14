const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = db.Sequelize;

router.get("/", async (req, res) => {
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

router.get("/", async (req, res) => {
  try {
    const { id, genres, token } = req.query;
    const user;
    if (genres) {
      genres = genres.split(",").map(genre => +genre);
    }
    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Missing token."
      })
    }
    user = jwt.validate()
  
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Unable to process request."
    })
  }
})

router.get("/:id", async (req, res) => {
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

router.get("/api/borrowed", async (req, res) => {
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

router.post("/api/videos", async (req, res) => {
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