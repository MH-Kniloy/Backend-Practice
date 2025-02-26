const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserList = require("./schema/userSchema")
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://kniloy:16051995bd@cluster0.vdl71.mongodb.net/userInfo?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"));


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
