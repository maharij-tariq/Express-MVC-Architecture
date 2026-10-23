import express from 'express'
const app = express()
import dotenv from 'dotenv'
import router from './router/route.js'
dotenv.config()
app.set('view engine','ejs')
const PORT = process.env.PORT;

app.use('/',router)
app.use('/student',router)


app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})
