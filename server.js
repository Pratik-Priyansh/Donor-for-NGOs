const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const Donordb = require("./server/model/model");
const path = require("path");
const app = express();
const connectDB = require("./server/database/connection");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser());
//mongodb connection
connectDB();
// app.use(express.urlencoded({ extended: true }));

// app.use(express.json());
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", function (req, res) {
  res.render("login");
});
app.get("/NGOlogin", function (req, res) {
  res.render("NGOlogin");
});
app.get("/signup", function (req, res) {
  res.render("signup");
});
app.get("/NGOsignup", function (req, res) {
  res.render("NGOsignup");
});
app.get("/api/users", function (req, res) {
  res.render("index", { users: response.data });
});
// get route for homepage to be shown after login
app.get("/home", async (req, res) => {
  console.log("hello");
  res.render("home");
});

// post route for adding the functionality of login

// also added name attribute to the input tags under form tag in login.ejs
app.post("/api/users", async (req, res) => {
  const { username, password } = req.body;
  const founduser = (await Donordb.find({ Username: username }))[0];
  console.log(founduser);
  if (founduser) {
    if (founduser.Password === password) {
      res.redirect("../home");
    } else {
      res.send("Wrong password");
    }
  } else {
    res.send("Username doesn't exist");
  }
});
/*

app.post("/NGOlogin", async(req, res)=>{
    res.render("NGOlogin");
})
app.post("/signup", async(req, res)=>{
    res.render("signup");
})
app.post("/NGOsignup", async(req, res)=>{
    res.render("NGOsignup");
})*/
// app.use('/',require('./server/routes/router'));

app.listen(3000, () => {
  console.log("server running on port 3000");
});
