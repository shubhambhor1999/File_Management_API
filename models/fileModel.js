const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  path: { type: String, required: true },
});

const FileModel = mongoose.model("File", fileSchema);

module.exports = FileModel;
