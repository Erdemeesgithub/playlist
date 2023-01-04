const { Schema, Types, model } = require("mongoose");

const playlistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  creator: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  songs: {
    type: Schema.Types.ObjectId,
    ref: "Song",
  },
});

const Playlist = model("Playlist", playlistSchema);

exports.Playlist = Playlist;
