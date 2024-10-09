const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
      enum: ["admin", "client"],
      default: "client",
    },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true,
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
userSchema.plugin(uniqueValidator);
//-->-->-->-->-->--> create the model
module.exports = mongoose.model("User", userSchema);

//-->-->-->-->-->--> END USER MODEL
