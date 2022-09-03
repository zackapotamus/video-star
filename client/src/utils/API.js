import axios from "axios";

export default {
  // Gets all videos
  getVideos: function() {
    return axios.get("/api/videos");
  },
  // Gets the video with the given id
  getVideo: function(id) {
    return axios.get("/api/videos", {
      params: {
        id,
      }
    });
  },
  // Deletes the video with the given id
  deleteVideo: function(id) {
    return axios.delete("/api/videos", {
      params: {
        id
      }
    });
  },
  // Saves a video to the database
  addVideo: function(id, video_type) {
    return axios.post("/api/videos", { id, video_type });
  },
  // Updates a video with the given id
  updateVideo: function(id, videoData) {
    return axios.put("/api/videos", { id, ...videoData });
  },
  // Search for movie
  searchMovies: function(query) {
    return axios.get("/api/search", {
      params: {
        query,
      }
    });
  },
  // Log in
  login: function(loginData) {
    return axios.post("/api/auth", loginData);
  },
  getUser: function() {
    return axios.get("/api/auth");
  },
  updateUser: function(userData) {
    return axios.put("/api/auth", userData);
  }
};
