const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    age:Number
})

module.exports = mongoose.model("UserList" , userSchema)