const mongoose = require('mongoose'); // import mongoose
const userSchema=mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    tel : Number,
    region : String,
    role : String,
});
const users = mongoose.model("user",userSchema)
module.exports=users;