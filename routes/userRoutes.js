const express = require("express");
const {
  createUser,
  getUsers,
  getUser,
  loginUser,
} = require("../controller/userController");

const router = express.Router();

router
  .post("/login", loginUser)
  .get("/users/:id", getUser)
  .put("/users/:id", () => {})
  .delete("/users/:id", () => {})
  .post("/users", createUser)
  .get("/users", getUsers);

exports.userRoutes = router;
