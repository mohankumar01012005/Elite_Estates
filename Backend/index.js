import express from "express"
import mongoose from "mongoose";

import dotenv from "dotenv"
import userRouter from "./Routes/user.route.js"

dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(()=>{

  console.log('DataBase connected successfully');
}
  
).catch((err)=>{
  console.log('error', err);
  
})


const app = express()

app.listen(3000 ,()=>{
  console.log('Server is running on Port 3000 ! !');
  
})
 

app.use("/Backend/user",userRouter)