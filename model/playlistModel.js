const { Schema, Types, model } = require("mongoose");

const playlistSchema = new Schema({
  title: String,
  description: String,
  creatorId: Types.ObjectId,
  createdAt: { type: Date, default: Date.now() },
  isPrivate: Boolean,
});

const Playlist = model("Playlist", playlistSchema);

exports.Playlist = Playlist;
