const { Playlist } = require("../model/playlistModel");

exports.createPlaylist = async (req, res) => {
  const body = req.body;
  const result = await new Playlist(body).save();
  res.send(result);
};

exports.getPlaylists = async (req, res) => {
  const uid = req.query.userId;
  if (uid) {
    console.log(uid)
  const { fbId } = req.query;
  const data = await Playlist.find({ fbId }).populate("songs");
  res.send(data);
  }
  res.sendStatus(404);
};
exports.getPlaylist = async (req, res) => {
  const playlistId = req.params.id;
  const data = await Playlist.findById(playlistId).populate("songs");
  res.send(data);
};
exports.userPlaylist = async (req, res) => {
  const userId = req.user;
  const data = await Playlist.find(userId).populate("songs");
  res.send(data);
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
