import express from 'express'
import cookieParser from 'cookie-parser';
const app = express()
const PORT = 5000;


app.use(cookieParser())
app.get('/',(req,res)=>{
    console.log(req.headers.cookie)
    res.send('home page')
})

//set cookie
app.get('/getcookie',(req,res)=>{
    try {
        res.cookie('username',"maharij",{
            maxAge: 1000 * 60 * 2,
            httpOnly: false,
            sameSite: 'Strict'
        })
        return res.send('cookie set successfully')
    } catch (error) {
        res.send(`getcokie is not set ${error.message}`)
    }
})

app.get('/login',(req,res)=>{
    if(!req.cookies.username){
        return res.send('please login ')
    }
    res.send(`username name form cookie ${req.cookies.username}`)
})

app.get('/logout',(q,res)=>{
    try { 
      res.clearCookie('username')
      if(!req.cookies.username){
        return res.send('user not logout ')
      }
    res.send('cookie logout successfully')
        
    } catch (error) {
     res.send('logout error')   
    }
    
 
})


app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})