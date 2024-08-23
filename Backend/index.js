import express from "express"
import mongoose from "mongoose";
import authRouter from "./Routes/auth.route.js"
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
app.use(express.json())

app.listen(3000 ,()=>{
  console.log('Server is running on Port 3000 ! !');
  
})
 
app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error "
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})
app.use("/Backend/user",userRouter)
app.use("/Backend/auth",authRouter)