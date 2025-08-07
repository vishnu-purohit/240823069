import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

export const User=mongoose.model("user",userschema)