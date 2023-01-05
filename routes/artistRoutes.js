const express = require("express");
const { artistController } = require("../controller");

const router = express.Router();

router
  .get("/artists", artistController.getArtists)
  .get("/artist/:id", artistController.getArtist)
  .post("/artists", artistController.createArtist)
  .put("/artist/:id", () => {})
  .delete("/artist/:id", () => {});

exports.artistRoutes = router;
