const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Dirty_ToiletPaper:94031299ub@cluster0.hvxh5nv.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGODB_URL);
    console.log(`successfully connected to MongoDB heh`);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.connect = connect;
