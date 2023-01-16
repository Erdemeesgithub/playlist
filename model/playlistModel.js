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
  user: {
    type: String,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // playlistId:{
  //  type:String,
  //  required: true
  // },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});

const Playlist = model("Playlist", playlistSchema);

exports.Playlist = Playlist;
