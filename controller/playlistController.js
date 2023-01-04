const { Playlist } = require("../model/playlistModel");

exports.createPlaylist = async (req, res) => {
  const body = req.body;
  const result = await new Playlist(body).save();
  res.send(result);
};

exports.getPlaylist = async (req, res) => {
  const result = await Playlist.find({});
  res.send(result);
};
exports.deletePlaylist = async (req, res) => {
  const id = req.params.id;
  const result = await Playlist.deleteOne({ _id: id });
  res.send("deleted");
};
exports.updatePlaylist = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await Playlist.findByIdAndUpdate(id, body);
  res.send("updated ");
};
// exports.addToPlaylist = async (req, res) => {
//   const playlistId = req.query.playlistId;
//   const songId = req.params.id;
//   const playlist = await Playlist.findById;
// };


