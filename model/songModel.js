const { Schema, model } = require("mongoose");

const songSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  artist: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artist",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  url: String,
});

const Song = model("Song", songSchema);

exports.Song = Song;
