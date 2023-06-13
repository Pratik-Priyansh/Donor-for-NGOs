const express=require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");

const path=require('path');
const app=express();
const connectDB=require('./server/database/connection');
app.use(express.static("public"));
app.set('view engine','ejs');
//mongodb connection
connectDB();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.render("index");
})
app.get("/login", function(req, res){
    res.render("login");
})
app.get("/NGOlogin", function(req, res){
    res.render("NGOlogin");
})
app.get("/signup", function(req, res){
    res.render("signup");
})
app.get("/NGOsignup", function(req, res){
    res.render("NGOsignup");
})
/*
app.post("/login",async(req,res)=>{
    res.render("login");
})
app.post("/NGOlogin", async(req, res)=>{
    res.render("NGOlogin");
})
app.post("/signup", async(req, res)=>{
    res.render("signup");
})
app.post("/NGOsignup", async(req, res)=>{
    res.render("NGOsignup");
})*/
app.use('/',require('./server/routes/router'));

app.listen(3000,()=>{console.log("server running on port 3000")});