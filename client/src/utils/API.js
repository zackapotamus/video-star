import axios from "axios";

export default {
  // Gets all videos
  getVideos: function(token) {
    return axios.get("/api/videos", {
      params: {
        token
      }
    });
  },
  // Gets the video with the given id
  getVideo: function(id, token) {
    return axios.get("/api/videos", {
      params: {
        id,
        token
      }
    });
  },
  // Deletes the video with the given id
  deleteVideo: function(id, token) {
    return axios.delete("/api/videos", {
      params: {
        token,
        id
      }
    });
  },
  // Saves a video to the database
  addVideo: function(id, video_type, token) {
    return axios.post("/api/videos", { id, token, video_type });
  },
  // Updates a video with the given id
  updateVideo: function(id, token, videoData) {
    return axios.put("/api/videos", { id, token, ...videoData });
  },
  // Search for movie
  searchMovies: function(token, query) {
    return axios.get("/api/search", {
      params: {
        query,
        token
      }
    });
  },
  // Log in
  login: function(loginData) {
    return axios.post("/api/auth", loginData);
  },
};
