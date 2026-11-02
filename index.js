import express from 'express';
import session  from 'express-session';
 const app = express()
 const PORT = 5000;


 app.use(session({
    secret : 'MySecretKey',
    resave: false,
    saveUninitialized : false,
    cookie:{
        httpOnly: false,
        maxAge: 1000 * 60 *2,
        sameSite: 'strict'
    }
 }))

 app.get('/',(req,res)=>{
    res.send('home page')
 })

 app.get('/setsession',(req,res)=>{
    try {
         req.session.username = "Maharij Tariq";
         res.status(200).send(`cookie set successfully`)
    } catch (error) {
        res.send(error.message)
    }
 })

 //get cookie
 app.get('/profile',(req,res)=>{
    try {
   if(req.session.username){
      res.send(`username form  sessioin ${req.session.username}`)
   }else{
      res.send('please login...')
   }
    } catch (error) {
        res.send(error.message)
    }
  
 })

 app.get('/logout',(req,res)=>{
   const username = req.session.username;
     req.session.destroy((err)=>{
        if(err){
         return    res.send(`you dont logut  ${err.message} `)
        }
        res.clearCookie('connect.sid')
        res.send(`you logout successfully ${username}`)
    })
 })

 app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
 })