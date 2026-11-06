import express from 'express'
import { fetchedData } from './config/todo.config.js';
import router from './router/todoRouter.js';
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT;

app.use(express.json())
app.use('/',router)

const startServer = async()=>{
await fetchedData()
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})
}

startServer()


