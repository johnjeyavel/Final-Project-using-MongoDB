const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
//users table name
const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel