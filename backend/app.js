const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Mongo URI
const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.set("useUnifiedTopology", true);

const mongoURI =
  "mongodb+srv://omkar:omkar@cluster0.sdhtu.mongodb.net/apk?retryWrites=true&w=majority";

// create mongo connection
const conn = mongoose.createConnection(mongoURI, mongodbOptions);
// init gfs
let gfs;

conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: "apk" });
  console.log("connection successful");
});

// create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "apk",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage }); // middleware to coonect form and data instance

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

// @route POST / upload -> upload multiple files
// const no_of_files = 10; // will upload defined number of files
app.post("/", upload.array("appImg"), (req, res, err) => {
  // res.json({ file: req.file });
  // res.redirect("/");
  if (err) throw err;
  res.status(201).send(req.file);
});

// @route GET /files
app.get("/files", (req, res) => {
  gfs.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No files exist",
      });
    }

    // Files exist
    // const getfile = res.json(files.map((res) => res.filename));
    const getfile = res.json(files);

    return getfile;
  });
});

app.get("/files/:filename", (req, res) => {
  gfs.find({ filename: req.params.filename }).toArray((err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }
    // File exists
    const go = gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    return go;
  });
});

app.get("/image/:filename", (req, res) => {
  gfs.find({ filename: req.params.filename }).toArray((err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }

    // Check if image
    gfs.openDownloadStreamByName(req.params.filename).pipe(res);
  });
});

const cors = require("cors");

const port = 5000;
app.use(cors(port));
app.listen(port, () => console.log(`Server starts on port ${port}`));
