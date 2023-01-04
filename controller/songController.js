const { Song } = require("../model/songModel");

exports.createSong = async (req, res) => {
  const body = req.body;
  const result = await new Song(body).save();
  res.send(result);
};
exports.getSong = async (req, res) => {
  const playlistId = req.query.playlistId;

  if (playlistId) {
    const result = await Song.find({ playlistId });
    return res.send(result);
  }
  const result = await Song.find({});
  res.send(result);
};
exports.deleteSong = async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;

  const result = await Song.findById(id);

  await Song.deleteOne(result);
  res.send("deleted");
};
