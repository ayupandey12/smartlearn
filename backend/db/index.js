import mongoose from "mongoose";


const user=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role: { type: String, enum: ['admin', 'instructor', 'student', 'guest'], required: true, default: 'student' },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date }
})
export const User=mongoose.model("User",user);
