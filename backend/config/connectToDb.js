require("dotenv").config();
const mongoose = require("mongoose");
const connectToDb = async () => {
  mongoose.connect(process.env.DB_URL);
  console.log("Connected to DB");
};
module.exports = connectToDb;
