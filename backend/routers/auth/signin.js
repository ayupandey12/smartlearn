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
        password:z.string().min(6, { message: "password should be at least 6 characters" })
    }
)
export default async function signin(req,res,next) {
       const decode=schema.safeParse(req.body);
       if(!decode.success) 
       {
      return  res.status(400).json({
              errors:decode.error.errors[0].message
        })
       }
       const user=await User.findOne({username:decode.data.username});
       if(!user)
        {
         return  res.status(400).json({
             errors:"user not found"
       })
        }
       const pass=await bcrypt.compare(decode.data.password,user.password);
       if(!pass)
       {
        return  res.status(400).json({
            errors:"wrong password"
      })
       }
     const Userid=user._id;
    const token =jwt.sign({Userid},JWT_SECRET,{expiresIn:"1h"});
    res.json({ message: "successfully logged in", token });
}