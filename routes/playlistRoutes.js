const express = require("express");
const {
  createPlaylist,
  getPlaylist,
  deletePlaylist,
  updatePlaylist,
  getPlaylists,
  addtoplaylist
} = require("../controller/playlistController");

const router = express.Router();

router
  .get("/playlists", getPlaylists)
  .get("./playlist/:id", getPlaylist)
  .post("/playlists", createPlaylist)
  .put("/playlist/:id", addtoplaylist)
  .delete("/playlist/:id", deletePlaylist);

exports.playlistRoutes = router;
