import express from "express";
const app = express()
import { dbConnection } from "./config/db.js";
import router from "./router/router.js";
import dotenv from "dotenv";
dotenv.config()
const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', router)
app.use('/',router)
app.use('/',router)

const startServer = async () => {
    try {
        await dbConnection();
     app.listen(PORT,()=>{
        console.log(`server is listening on ${PORT}`)
     })

    }catch(error){
        console.log(error.message)
    }
};

startServer();
