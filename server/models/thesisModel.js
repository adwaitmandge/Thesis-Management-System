const mongoose = require("mongoose");

const thesisSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    professor: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "User",
    },
    creator_student: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "User",
      type: String,
    },
    status: "String",
    path: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Thesis = mongoose.model("Thesis", thesisSchema);
module.exports = Thesis;
