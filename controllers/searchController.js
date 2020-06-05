const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const genreMap = require("../json/genres.json");

router.get("/", async (req, res) => {
  try {
    const { query } = req.query;
    const page = req.query.page || 1;
    if (!query) {
      return res.status(404).json({
        success: false,
        message: "Please include a query."
      });
    }
    let result = await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        page,
        query,
        include_adult: true,
        language: "en-US",
        api_key: process.env.API_KEY,
      },
    });
    // console.log(result.data.results);
    let results = result.data.results.map(r => ({
      popularity: r.popularity,
      vote_count: r.vote_count,
      video: r.video,
      poster_path: r.poster_path,
      id: r.id,
      adult: r.adult,
      backdrop_path: r.backdrop_path,
      original_language: r.original_language,
      original_title: r.original_title,
      genres: r.genre_ids.map(id => ({id: id, name: genreMap[id]})),
      title: r.title,
      vote_average: r.vote_average,
      overview: r.overview,
      release_date: r.release_date,
    }));
    res.json(results);

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Unable to process search request."
    })
  }
})

module.exports = router;