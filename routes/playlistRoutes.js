const express = require("express");
const { createPlaylist, getPlaylist, deletePlaylist, updatePlaylist, getPlaylists } = require("../controller/playlistController");

const router = express.Router();

router
   .get("/playlists", getPlaylists)
   .get("./playlist/:id", getPlaylist)
   .post("/playlists", createPlaylist)
   .put("/playlist/:id", updatePlaylist)
   .delete("/playlist/:id", deletePlaylist);

exports.playlistRoutes = router

