const mongoose = require("mongoose");
const mongo_uri =
  "mongodb+srv://blurry:blurry123@cluster0-pt66s.mongodb.net/test";

mongoose.connect(
  mongo_uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB Connected");
    }
  }
);
