const express = require("express");
const { createPlaylist, getPlaylist, deletePlaylist, updatePlaylist } = require("../controller/playlistController");

const router = express.Router();

router
   .get("/playlists", getPlaylist)
   .post("/playlists", createPlaylist)
   .put("/playlist/:id", updatePlaylist)
   .delete("/playlist/:id", deletePlaylist);

exports.playlistRoutes = router

