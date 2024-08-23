import User from "../Models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../Utils/error.js";

export const signup= async (req,res,next )=>{
  const {userName,email,password}=req.body  

  const hashedPassword = bcryptjs.hashSync(password,10);
  const newUser =new User({userName , email, password:hashedPassword}) 
  try {
    
    await newUser.save()
    res.status(201).json('User Created successfully')
  } catch (error) {
    next(errorHandler(550,'error from the function'))

  }
}   

