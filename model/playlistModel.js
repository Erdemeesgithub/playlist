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
  fbId: {
    type: String,
    required: true,
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
