const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT ||3000;
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const firebase = require("firebase");








app.use(express.static(path.join(__dirname,"frontend")));

app.get("/",(req,res)=>{
  res.send("hellow world");
});
app.get("/user",(req,res)=>{
  res.send("hellow user");
});





app.listen(port,()=>{
  console.log("listen to the port: "+port);
});
