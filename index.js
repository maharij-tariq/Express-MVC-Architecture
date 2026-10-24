import express from 'express'
const app = express()
import router from './router/route.js'
import dotenv from 'dotenv'
dotenv.config()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT;

app.use(express.json())

app.use('/',router)
app.use('/',router)
app.use('/',router)
app.use('/',router)

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})