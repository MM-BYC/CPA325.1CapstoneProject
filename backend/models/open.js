/* 
open.js 

ref: "User" -> must be the same case from the model name
      Mongoose.model("User", userSchema)

*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

const openSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: "user" },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    validate: {
      validator: async (value) => {
        const user = await User.findById(value);
        return user.role === "client";
      },
      message: "Only users with role 'client' can book an open date",
    },
  },
  booked: {
    type: Boolean,
    default: false,
  },
  openDate: { type: Date, required: true },
  openTime: { type: String, required: true },
  timestamps: true,
});

//-->-->-->-->-->--> create the model
module.exports = mongoose.model("Open", OpenSchema);

//-->-->-->-->-->--> END OPEN MODEL
