const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const taskSchema = new Schema(
  {
    title: { type: String, required: [true, "Must provide a title"] },
    task: { type: String, required: [true, "Must provide a task"] },
    createdBy: {
      type: mongoose.Types.ObjectId,
      required: [true, "Must provide a userID"],
    },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model("Task", taskSchema);
