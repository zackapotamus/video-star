const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = db.Sequelize;
const axios = require("axios");

// Matches "/api/videos"
router.get("/", async (req, res) => {
  try {
    let genres;
    const { id, token } = req.query;
    let user;
    if (req.query.genres) {
      genres = req.query.genres.split(",").map(genre => +genre);
    }
    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Missing token."
      })
    }
    user = jwt.verify(
      token,
      process.env.REACT_APP_SESSION_SECRET
    );
    if (id) {
      let video = await db.Video.findOne({
        include: {
          model: db.Genre,
          as: "genres",
          through: {
            attributes: [],
          },
        },
        where: {
          id: id,
          user_id: user.id
        },
      });
      res.status(200).json(video);
    }
    else if (genres) {
      let videos = await db.Video.findAll({
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
          user_id: user.id,
          "$filter_genres.id$": {
            [Op.in]: genres,
          },
        },
      });
      res.status(200).json(videos);

    }
    else {
      let video = await db.Video.findAll({
        include: {
          model: db.Genre,
          as: "genres",
          through: {
            attributes: [],
          },
        },
        where: {
          user_id: user.id
        },
      });
      res.status(200).json(video);    }
  
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Unable to process request."
    })
  }
})

// Matches "/api/videos"
router.delete("/", async (req, res) => {
  const { id, token } = req.query;
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Missing token."
    })
  }
  user = jwt.verify(
    token,
    process.env.REACT_APP_SESSION_SECRET
  );
  let response = await db.Video.delete({
    where: {
      id: id,
      user_id: user.id
    }
  });
  if (response > 0) {
    return res.json({
      success: true,
      message: "Movie deleted."
    });
  } else {
    return res.status(404).send();
  }
});

// Matches 

router.post("/", async (req, res) => {
  try {
    const { id: tmd_id, token, video_type } = req.body;
    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Missing token."
      })
    }
    const user = jwt.verify(
      token,
      process.env.REACT_APP_SESSION_SECRET
    );
    let result = await axios.get(`https://api.themoviedb.org/3/movie/${tmd_id}`, {
      params: {
        language: "en-US",
        api_key: process.env.API_KEY,
      },
    });
    let tmd_movie = result.data;
    console.log(tmd_movie);
    let video = await db.Video.create({
      user_id: user.id,
      adult: tmd_movie.adult,
      backdrop_path: tmd_movie.backdrop_path,
      poster_path: tmd_movie.poster_path,
      tmd_id: tmd_movie.id,
      imdb_id: tmd_movie.imdb_id,
      original_title: tmd_movie.original_title,
      overview: tmd_movie.overview,
      popularity: tmd_movie.popularity,
      release_date: tmd_movie.release_date,
      runtime: tmd_movie.runtime,
      // is_borrowed: req.body.is_borrowed,
      // is_lent: req.body.is_lent,
      tagline: tmd_movie.tagline,
      title: tmd_movie.title,
      vote_average: tmd_movie.vote_average,
      vote_count: tmd_movie.vote_count,
      video_type: video_type,
      // foo: "bar",
      // genres: tmd_movie.genres
    }, {
      // include: [{
      //   model: db.Genre,
      //   as: 'genres',
      // }]
    });
    console.log(tmd_movie.genres);
    if (tmd_movie.genres) {
      await video.addGenres(tmd_movie.genres.map(genreObj => genreObj.id));
    }
    res.json({
      success: true,
      data: video.id
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to process request."
    });
    console.log(err);
  }
});

module.exports = router;
