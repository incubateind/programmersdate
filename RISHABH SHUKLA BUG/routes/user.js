const User = require("../models/User.js");
const express = require("express");
const jwt = require("jsonwebtoken");
const withAuth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", function (req, res) {
  const { email, password, name } = req.body;
  const user = new User({ email, password, name });
  user.save(function (err, doc) {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      const payload = { email };
      const token = jwt.sign(payload, "secret", {
        expiresIn: "1h",
      });
      res.cookie("token", token).json({ token, user });
    }
  });
});

router.post("/login", function (req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function (err, user) {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "Internal error please try again",
      });
    } else if (!user) {
      res.status(401).json({
        error: "Incorrect email or password",
      });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again",
          });
        } else if (!same) {
          res.status(401).json({
            error: "Incorrect email or password",
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, "secret", {
            expiresIn: "1h",
          });
          res.cookie("token", token).json({ token, user });
        }
      });
    }
  });
});

router.get("/protected", withAuth, function (req, res) {
  res.send({ message: "Auth Ok!" });
});

module.exports = router;
