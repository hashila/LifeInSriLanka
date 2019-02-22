const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT ||3000;

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
