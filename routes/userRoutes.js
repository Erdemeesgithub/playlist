const express = require("express")
const {createUser, getUsers, getUser, loginUser} = require("../controller/userController")

const router = express.Router()

router
.post("/login", loginUser)
router.route("/users/:id").get(getUser).put( () => {}).delete(() => {})
router.route("/users").post(createUser).get(getUsers)

exports.userRouter = router