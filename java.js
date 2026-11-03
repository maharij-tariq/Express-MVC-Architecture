import express from 'express'
import connect from './config/monodb.js';
import router from './router/router.js';
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const PORT = process.env.PORT;


app.use(express.json())
app.use('/',router)


const startServer = async( ) =>{
try {
    await connect();
    app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})
} catch (error) {
console.error('mongodb is not connect: ', error.message) 
}
}
startServer()



