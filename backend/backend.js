import express from 'express'
import cors from 'cors'
const app = express()
const PORT = 5003;


app.use(cors({ origin: 'http://localhost:5173' })) 

app.get('/get/message',(req,res)=>{
res.status(200).json({message:'hello word from node.js'})
})

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})