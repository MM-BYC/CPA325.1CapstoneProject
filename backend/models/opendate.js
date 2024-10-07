/* 
openDate.js 
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

const openDateSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: "user" },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    validate: {
      validator: async (value) => {
        const user = await User.findById(value);
        return user.role === "user";
      },
      message: "Only users with role 'user' can book an open date",
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
const OpenDate = mongoose.model("OpenDate", OpenDateSchema);

module.exports = OpenDate;
