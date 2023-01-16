const express = require("express");
const {
  createUser,
  deleteUser,
  getUser,
  loginUser,
} = require("../controller/userController");

const router = express.Router();

router
  .post("/login", loginUser)
  .get("/user/:id", getUser)
  .put("/users/:id", () => {})
  .delete("/users/:id", deleteUser)
  .post("/users", createUser)

exports.userRoutes = router;
