const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserList = require("./schema/userSchema")
const port = 3000;

app.use(express.json())
mongoose
  .connect(
    "mongodb+srv://kniloy:16051995bd@cluster0.vdl71.mongodb.net/userInfo?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"));


const users = [
  {
    firstname: "niloy",
    lastname: "hassan",
    email: "niloyhassan@gmail.com",
    age: 25,
  },
  {
    firstname: "niloy",
    lastname: "hassan2",
    email: "niloyhassan2@gmail.com",
    age: 35,
  },
  {
    firstname: "niloy",
    lastname: "hassan3",
    email: "niloyhassan3@gmail.com",
    age: 75,
  },
  {
    firstname: "niloy",
    lastname: "hassan4",
    email: "niloyhassan4@gmail.com",
    age: 55,
  },
]; 
app.get("/", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) =>{
    console.log(req.body)
    const {fname,lname,email,age} = req.body

    const users = new UserList({
        firstname:fname,
        lastname:lname,
        email:email,
        age:age
    })
    users.save()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
