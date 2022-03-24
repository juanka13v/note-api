const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const noteSchema = new Schema(
  {
    title: { type: String, required: [true, "Must provide a title"] },
    note: { type: String, required: [true, "Must provide a note"] },
    userId: {
      type: mongoose.Types.ObjectId,
      required: [true, "Must provide a userID"],
    },
    completed: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = model("Note", noteSchema);
