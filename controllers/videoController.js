const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = db.Sequelize;
const axios = require("axios");
const withAuth = require("../middleware");

// Matches "/api/videos"
router.get("/", withAuth, async (req, res) => {
  try {
    const { id } = req.query;
    // let user;
    // if (!token) {
    //   return res.status(403).json({
    //     success: false,
    //     message: "Missing token.",
    //   });
    // }
    // user = jwt.verify(token, process.env.REACT_APP_SESSION_SECRET);
    if (id) {
      let video = await db.Video.findOne({
        include: [
          {
            model: db.Genre,
            as: "genres",
            through: {
              attributes: [],
            },
          },
          {
            model: db.Cast,
            as: "cast",
            through: {
              attributes: [],
            },
            attributes: ["id", "name", "person_id", "character", "order"],
            // order: ['order', 'asc'],
          },
          {
            model: db.Crew,
            as: "directors",
            through: {
              attributes: [],
            },
            attributes: ["id", "name"],
            where: {
              job: "Director",
            }
          },
        ],
        where: {
          id: id,
          user_id: req.id,
        },
      });
      res.status(200).json(video);
    } else {
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
            model: db.Cast,
            as: "cast",
            through: {
              attributes: [],
            },
            attributes: ["id", "name", "person_id", "character", "order"],
            // order: ['order', 'asc'],
          },
        ],
        where: {
          user_id: req.id,
        },
        // order: [[db.Sequelize.literal("REGEXP_REPLACE(Video.title, '^(A |The )', '')"), "ASC"]],
        order: [['sort_title', 'ASC']]
      });
      res.status(200).json(video);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Unable to process request.",
    });
  }
});

// Matches "/api/videos"
router.delete("/", withAuth, async (req, res) => {
  const { id, token } = req.query;
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Missing token.",
    });
  }
  user = jwt.verify(token, process.env.REACT_APP_SESSION_SECRET);
  let response = await db.Video.destroy({
    where: {
      id: id,
      user_id: user.id,
    },
  });
  if (response > 0) {
    return res.json({
      success: true,
      message: "Movie deleted.",
    });
  } else {
    return res.status(404).send();
  }
});

// Matches

router.post("/", withAuth, async (req, res) => {
  try {
    const {
      id: tmd_id,
      // token,
      video_type,
      is_borrowed,
      lend_borrow_name,
      lend_borrow_date,
      lend_borrow_due_date,
    } = req.body;
    // if (!token) {
    //   return res.status(403).json({
    //     success: false,
    //     message: "Missing token.",
    //   });
    // }
    // const user = jwt.verify(token, process.env.REACT_APP_SESSION_SECRET);
    let movieResult = await axios.get(
      `https://api.themoviedb.org/3/movie/${tmd_id}`,
      {
        params: {
          language: "en-US",
          api_key: process.env.API_KEY,
        },
      }
    );
    let castResult = await axios.get(
      `https://api.themoviedb.org/3/movie/${tmd_id}/credits`,
      {
        params: {
          api_key: process.env.API_KEY,
        },
      }
    );
    let tmd_cast = castResult.data.cast.map((cast) => ({
      person_id: cast.id,
      character: cast.character,
      credit_id: cast.credit_id,
      gender: cast.gender,
      cast_id: cast.cast_id,
      name: cast.name,
      order: cast.order,
      profile_path: cast.profile_path,
    }));
    let tmd_crew = castResult.data.crew.map((crew) => ({
      person_id: crew.id,
      department: crew.department,
      credit_id: crew.credit_id,
      gender: crew.gender,
      job: crew.job,
      name: crew.name,
      profile_path: crew.profile_path,
    }));
    let tmd_movie = movieResult.data;
    let video = await db.Video.create({
      budget: tmd_movie.budget,
      user_id: req.id,
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
      is_borrowed: is_borrowed || false,
      lend_borrow_date: lend_borrow_date || null,
      lend_borrow_due_date: lend_borrow_due_date || null,
      lend_borrow_name: lend_borrow_name || null,
      is_lent: false,
      tagline: tmd_movie.tagline,
      title: tmd_movie.title,
      sort_title: tmd_movie.title.replace(/^(An? |The )/, ''),
      vote_average: tmd_movie.vote_average,
      vote_count: tmd_movie.vote_count,
      video_type: video_type,
    });
    if (tmd_movie.genres) {
      await video.addGenres(tmd_movie.genres.map((genreObj) => genreObj.id));
    }
    let results = await db.Cast.bulkCreate(tmd_cast, {
      return: true,
    });
    video.addCast(results.map((result) => result.dataValues.id));
    results = await db.Crew.bulkCreate(tmd_crew, {
      return: true,
    });
    video.addCrew(results.map((result) => result.dataValues.id));
    res.json({
      success: true,
      data: video.id,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to process request.",
    });
    console.log(err);
  }
});

router.put("/", withAuth, async (req, res) => {
  try {
    let result;
    const {
      is_lent,
      is_borrowed,
      /*token,*/ id,
      lend_borrow_name,
      lend_borrow_date,
      lend_borrow_due_date,
    } = req.body;
    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Missing token.",
      });
    }
    // const user = jwt.verify(token, process.env.REACT_APP_SESSION_SECRET);
    if (is_lent) {
      result = await db.Video.update(
        {
          is_lent: true,
          is_borrowed: false,
          lend_borrow_date: lend_borrow_date || new Date().toISOString(),
          lend_borrow_due_date: lend_borrow_due_date,
          lend_borrow_name: lend_borrow_name,
        },
        {
          where: {
            id,
            user_id: req.id,
          },
        }
      );
      console.log(result);
      console.log("grr...");
    } else {
      // borrowed
      result = await db.Video.update(
        {
          is_lent: false,
          is_borrowed: true,
          lend_borrow_date: lend_borrow_date || new Date().toISOString(),
          lend_borrow_due_date: due_date,
          lend_borrow_name: name,
        },
        {
          where: {
            id,
            user_id: req.id,
          },
        }
      );
      console.log("wtf");
    }
    res.json({
      success: true,
      message: "Video updated.",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Unable to proccess request.",
    });
  }
});

module.exports = router;
