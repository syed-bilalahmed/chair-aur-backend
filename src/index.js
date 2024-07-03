// require('dotenv').config({path: './env'})
import mongoose from "mongoose";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080 ,()=>{
        console.log(`Server is Running on ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongo DB connection faild !! ",err);
})
