import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import connectionDB from "./config/db.js";
import router from './router/route.js';
dotenv.config()
const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use('/api/user',router)
const startServer = async() =>{
    await connectionDB();
    app.listen(PORT,()=>{
        console.log(`server is listening on ${PORT}`)
    })
}

startServer()
