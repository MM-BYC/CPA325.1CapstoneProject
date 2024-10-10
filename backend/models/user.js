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
/*
 create an index on field lname 
 1 means ascending order
 -1 means descending order
*/

userSchema.index({ lname: 1 });

userSchema.plugin(uniqueValidator);
//-->-->-->-->-->--> create the model
module.exports = mongoose.model("User", userSchema);

//-->-->-->-->-->--> END USER MODEL
