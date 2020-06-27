//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();

app.use(express.static("public")); // we r setting public folder as a static resource
app.set("view engine", "ejs"); //setting our view engine as ejs
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret: "susucloudarefriends!",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
  "mongodb+srv://admin-sushant:Sushant2@cluster0-mgpvy.mongodb.net/userDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  nickname: String,
  email: String,
  password: String,
  googleId: String,
  googleName: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// Google Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/user",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {
      // console.log(profile.displayName);
      User.findOrCreate(
        { googleId: profile.id, googleName: profile.displayName },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

// ROUTES

app.get("/", function (req, res) {
  res.render("homie");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/user",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect user's page.
    res.redirect("/user");
  }
);

app.get("/feedback", (req, res) => {
  res.render("feedback");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/signup", function (req, res) {
  res.render("signup");
});

app.get("/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("user", { name: req.user.nickname || req.user.googleName });
  } else res.redirect("/login");
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.post("/signup", (req, res) => {
  User.register(
    { nickname: req.body.nickname, username: req.body.username },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.redirect("/signup");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/user");
        });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) console.log(err);
    else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/user");
      });
    }
  });
});

app.listen(5000, function () {
  console.log("Server started on port 3000");
});
