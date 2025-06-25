import z from "zod";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { User } from "../../db/index.js";
const JWT_SECRET=process.env.JWT_SECRET;
const schema=z.object(
    {
        username:z.string().min(5,{message:"username should be above 4 character"}),
        email:z.string().email({message:"not valid email"}),
        password:z.string().min(6,{message:"password should be above 5 character"}),
        role: z.string().optional()
    }
)
export default async function signup(req, res,next){
    const decode=schema.safeParse(req.body);
    if(!decode.success)
    {
        return res.status(400).json({
            errors:decode.error.errors[0].message
        })
    }
    const isexists=await User.findOne({$or:[{username:decode.data.username},{email:decode.data.email}]});
    if(isexists) return res.status(400).json({message:"user already exists"});
    try {
        const saltRounds=10;
        const hashedPassword=await bcrypt.hash(decode.data.password,saltRounds);
        const user=await User.create({username:decode.data.username,email:decode.data.email,password:hashedPassword,role:'student'})
        const Userid=user._id;
        const token =jwt.sign({Userid},JWT_SECRET,{expiresIn:"1h"})
       return res.status(200).json({message:"successfully user created",token})

    } catch (error) {
        next(error); 
    }
    
    
}