const express = require("express");
const { createPlaylist, getPlaylist, deletePlaylist, updatePlaylist, getPlaylists } = require("../controller/playlistController");

const router = express.Router();

router
   .get("/playlists", getPlaylists)
   .post("/playlists", createPlaylist)
   .put("/playlist/:id", updatePlaylist)
   .delete("/playlist/:id", deletePlaylist);

exports.playlistRoutes = router

