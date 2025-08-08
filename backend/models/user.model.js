const mongoose = require("mongoose");


const userSchema = mongoose.Schema({

 name:{
    type:String,
    required:true
 },
 email:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 },
 pic:{
    type:String,
    required:true,
    default:"https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
 },

}, { timestamps: true });

const User = mongoose.model("User",userSchema);

module.exports = User;


