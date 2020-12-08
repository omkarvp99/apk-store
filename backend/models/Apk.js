const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApkSchema = new Schema({
  caption: {
    required: true,
    type: String,
  },
  filename: {
    required: true,
    type: String,
  },
  fileId: {
    required: true,
    type: String,
  },
  createdAt: {
    default: Date.now(),
    type: Date,
  },
});

const Apk = mongoose.model("Apk", ApkSchema);

module.exports = Apk;
