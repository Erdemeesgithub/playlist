const { Artist } = require("../model");

const createArtist = async (req, res) => {
  const body = req.body;
  try {
    const result = await new Artist(body).save();
    res.send(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ message: error.message });
    }
  }
};

const getArtists = async (_req, res) => {
  const result = await Artist.find({});
  res.send(result);
};

const getArtist = async (req, res) => {
  const result = await Artist.findById(req.params.id);
  res.send(result);
};

module.exports = {
  createArtist,
  getArtist,
  getArtists,
};
