const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  path: {
    type: String,
    require: true,
  },
});

const File = new mongoose.model("File", fileSchema);
module.exports = File;
