const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const withAuth = require("./middlewares/auth");
require("./db/mongoose");
const user = require("./routes/user");
const hospital = require("./routes/hospital");
const Hospital = require("./models/Hospital");
const User = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public", "index.html"));
});

app.use("/api/user", user);
app.use("/api/hospital", hospital);

app.get("/api/checkToken", withAuth, function (req, res) {
  const { email } = req;
  User.findOne({ email }, function (err, user) {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "Internal error please try again",
      });
    } else if (!user) {
      Hospital.findOne({ email }, (err, hospital) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            error: "Internal error please try again",
          });
        } else if (!hospital) {
          res.status(401).json({
            message: "Authenticate first",
          });
        } else if (hospital) {
          res.json({ hospital, isHospital: true });
        }
      });
    } else if (user) {
      res.json({ user, isHospital: false });
    }
  });
});

app.get("/api/", withAuth, function (req, res) {
  res.send("Welcome!");
});

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
