const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    assigned_to: [
      { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    isCompleted: {
      type: Boolean,
    },
    deadline: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", goalSchema);
module.exports = Goal;