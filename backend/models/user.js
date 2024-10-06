const mongoose = require("mongoose");
const Schema = mongoose.Schema
const userSchema = new Schema({
  role: {
    type: String,
    require: true,
    enum: ["admin", "user"],
    default: "user",
  },
  name: { type: String, require: true },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 6,
  },
  timestamps: true,
});
