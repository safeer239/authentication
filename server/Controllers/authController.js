import User from "../Models/userSchema.js";
import bcryptjs from 'bcryptjs'

export const signup =async(req,res)=>{
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser =new User({username,email,password:hashedPassword});
    try{
        await newUser.save()
        res.status(200).json({message:"USer successfully created"})
    }
    catch(err){
        res.status(500).json(err.message)
    }
    }
   