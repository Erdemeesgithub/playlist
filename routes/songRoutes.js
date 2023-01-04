const express = require("express");
const { createSong, getSong, deleteSong } = require("../controller/songController");

const router = express.Router();

router
   .get("/songs", getSong)
   .post("/songs", createSong)
   .put("/song/:id", () => {})
   .delete("/song/:id", deleteSong);

exports.songRoutes = router

