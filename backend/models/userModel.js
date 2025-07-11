const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name : String,
    phone : Number,
    email : {
        type : String,
        // unique : true,
        required : true
    },
    password : String,
    profilePic : String,
    role : {type:Number,default:0},
    token : String,
    loginTime : Number,
},{
    timestamps : true
})


const userModel =  mongoose.model("user",userSchema)


module.exports = userModel