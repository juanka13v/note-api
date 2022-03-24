const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: [true, "Please provide a username"] },
    email: { type: String, required: [true, "Please provide a email"] },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    notes: [{ type: mongoose.Types.ObjectId , ref: 'Note'}],
},
{ timestamps: true }
);

module.exports = model("User", userSchema);

// populates('notes', {
//     date: 1,
//     title: 1,
//     note: 1 ,
//     userId: 0
// })