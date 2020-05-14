import axios from "axios";

export default {
  // Gets all videos
  getVideos: function(token) {
    return axios.get("/api/videos");
  },
  // Gets the video with the given id
  getVideo: function(id, token) {
    return axios.get("/api/video", {
      params: {
        id,
        token
      }
    });
  },
  // Deletes the video with the given id
  deleteVideo: function(id, token) {
    return axios.delete("/api/video", {
      params: {
        token,
        id
      }
    });
  },
  // Saves a video to the database
  saveVideo: function(tmdId, token) {
    return axios.post("/api/video", { id: tmdId, token });
  },
  // Updates a video with the given id
  updateVideo: function(id, token, videoData) {
    return axios.put("/api/video", { id, token, data: videoData });
  },
  // Search for movie
  searchMovies: function(searchTerm) {
    return axios.get("/api/search", {
      params: {
        query: searchTerm
      }
    });
  },
  // Log in
  login: function(loginData) {
    return axios.post("/api/auth", loginData);
  },
};
