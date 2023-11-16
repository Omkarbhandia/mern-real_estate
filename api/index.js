import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoutes.js";
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database Connected Successfully!");
}).catch((err) => {
    console.log(err);
})
const app = express();

app.listen(3000, ()=> {
    console.log("Server is running on port 3000 !");
})

////routes

app.use('/api/user', userRouter)