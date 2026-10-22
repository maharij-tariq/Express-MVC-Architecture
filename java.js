import express from 'express'
const app = express()
import dotenv from 'dotenv'
import router from './router/router.js';
dotenv.config()
const PORT = process.env.PORT;
app.use(express.json())
app.set('view engine','ejs')


app.use('/',router)
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})