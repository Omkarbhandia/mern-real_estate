import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoute.js"
import cookieParser from "cookie-parser";
import listingRouter from './routes/listingRoute.js'

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database Connected Successfully!");
}).catch((err) => {
    console.log(err);
})
const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000, ()=> {
    console.log("Server is running on port 3000 !");
})

////routes

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter)

//middlewares
app.use((err, req, res, next) =>{
    const statuscode = err.statuscode || 500;
    const message = err.message || "Internal Server Error"
    return res.status(statuscode).json({
        success: false,
        message,
        statuscode,
    })
}) 