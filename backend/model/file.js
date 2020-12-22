const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apkSchema = mongoose.Schema({
  appName: {
    type: String,
    required: true,
    trim: true,
  },
  appDev: {
    type: String,
    required: true,
    trim: true,
  },
  appSize: {
    type: Number,
    required: true,
  },
  appCategory: {
    type: String,
    required: true,
  },
  appImg: {
    data: Buffer,
    required: true,
    contentType: String,
  },
  createdAt: {
    default: Date.now(),
    type: Date,
  },
});
const GFS = new Schema({}, "apk.files");

const File = mongoose.model("apk", apkSchema);
module.exports = mongoose.model("GFS", GFS);
module.exports = File;
