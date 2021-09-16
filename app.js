const express = require("express");
const pug = require("pug");
const path = require("path");

// Express Related Stuff
app = express();
app.use(express.urlencoded());
app.use("/static", express.static("static"));
// Pug Related Stuff
app.set("view engine","pug");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.status(200).render("home.pug");
});

app.get("/contact",(req,res)=>{
    res.status(200).render("./contact.pug");
});

app.post("/contact",(req,res)=>{
    console.log(req.body);
});

app.listen(80,'127.0.0.1',(req,res)=>{
    console.log("Connection established Successfully");
});