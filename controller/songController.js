const { Song } = require("../model/songModel");

exports.createSong = async (req, res) => {
  const body = req.body;
  const result = await new Song(body).save();
  res.send(result);
};
exports.getSongs = async (req, res) => {
  const playlistId = req.query.playlistId;

  if (playlistId) {
    const result = await Song.find({ playlistId });
    return res.send(result);
  }
  const result = await Song.find({});
  res.send(result);
};
exports.getSong = async (req, res) => {
  const result = await Song.findById(req.params.id).populate("artist");
  res.send(result);
};
exports.deleteSong = async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;

  const result = await Song.findById(id);

  await Song.deleteOne(result);
  res.send("deleted");
};

exports.addArtistToSong = async (req, res) => {
  const songId = req.params.id;
  const artistId = req.body.artistId;

  try {
    await Song.findByIdAndUpdate(songId, {
      $push: { artist: artistId },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ message: error.message });
    }
  }
};
