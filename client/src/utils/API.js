import axios from "axios";

export default {
  // Gets all videos
  getVideos: function() {
    return axios.get("/api/videos");
  },
  // Gets the video with the given id
  getVideo: function(id) {
    return axios.get(`/api/videos/${id}`);
  },
  // Deletes the video with the given id
  deleteVideo: function(id) {
    return axios.delete(`/api/videos/${id}`);
  },
  // Saves a video to the database
  saveVideo: function(videoData) {
    return axios.post("/api/videos", videoData);
  },
  // Updates a video with the given id
  updateVideo: function(videoData) {
    return axios.put("/api/videos", videoData);
  },
  // Search for movie
  searchMovies: function(searchTerm) {
    return axios.get(`/api/search/${searchTerm}`);
  },
  // Log in
  login: function(loginData) {
    return axios.post("/api/login", loginData);
  },
  // Get User Data
  getUserData: function() {
    return axios.get("/api/user_data");
  }
};
