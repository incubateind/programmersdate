const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public")); // we r setting public folder as a static resource
app.set("view engine", "ejs"); //setting our view engine as ejs
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.render("homie");
});

app.get("/user", (req, res) => {
  res.render("user");
});

app.listen(5000, () => {
  console.log("Server Started Successfully At Port 5000");
});
