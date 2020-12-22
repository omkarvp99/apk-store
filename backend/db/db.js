const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://omkar:omkar@cluster0.sdhtu.mongodb.net/apk?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
