const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  role: {
    type: String,
    require: true,
    validate: {
      validator: (value) => ["Admin", "User"].includes(value.toLowerCase()),
      message: "{VALUE} is not a valid role",
    },
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

//-->-->-->-->-->--> create the model
const User = mongoose.model("user", userSchema);

module.exports = User;
