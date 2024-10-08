const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    role: {
      type: String,
      require: true,
      enum: ["admin", "client"],
      default: "client",
    },
    name: { type: String, require: true },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
      index: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

//-->-->-->-->-->--> create the model
module.exports = mongoose.model("User", userSchema);

//-->-->-->-->-->--> END USER MODEL
