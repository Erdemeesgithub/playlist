const { User } = require("../model");

const createUser = async (req, res) => {
  const body = req.body;
  const result = await new User(body).save();
  res.send(result);
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  console.log(user);

  if (user.password === password) {
    res.send(user);
  } else {
    res.status(401).json({ message: "Username or password is invalid" });
  }
};

const getUser = async (req, res) => {
  const playlistId = req.query.playlistId;

  if (playlistId) {
    const result = await User.find({ playlistId });
    res.send(result);
    return;
  }

  const result = await User.find({});
  res.send(result);
};
 
const deleteUser = async (req, res) => {
  const _id = req.params.id;
  await User.deleteOne({ _id });
  res.send("deleted");
};

module.exports = { createUser, getUser, loginUser, deleteUser };
