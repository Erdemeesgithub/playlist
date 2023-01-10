const { Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
    },
    password: {
        type: String, 
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    userId: {
        type: String,
        required: true
    }
})

const User = model("User", userSchema)

module.exports = User