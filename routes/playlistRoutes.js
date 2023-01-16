const express = require("express");
const {
  createPlaylist,
  getPlaylist,
  deletePlaylist,
  getPlaylists,
  updatePlaylist,
  userPlaylist
} = require("../controller/playlistController");

const router = express.Router();

router
  .get("/playlists", getPlaylists)
  .get("/playlist/:id", getPlaylist)
  .post("/playlists", createPlaylist)
  .put("/playlist/:id", updatePlaylist)
  .delete("/playlist/:id", deletePlaylist)
  .get("/playlist/:id", userPlaylist)

exports.playlistRoutes = router;
