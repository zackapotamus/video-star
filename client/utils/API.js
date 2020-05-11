import axios from "axios";

export default {
  // Gets all books
  getVideos: function() {
    return axios.get("/api/video");
  },
  // Gets the book with the given id
  getVideo: function(id) {
    return axios.get(`/api/videos/${id}`);
  },
  // Deletes the book with the given id
  deleteVideo: function(id) {
    return axios.delete(`/api/videos/${id}`);
  },
  // Saves a book to the database
  saveVideo: function(videoData) {
    return axios.post("/api/videos/", videoData);
  }
};
