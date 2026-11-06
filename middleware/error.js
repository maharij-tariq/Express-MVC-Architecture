const errorHandling = (err,req,res,next)=>{
console.err("Error:", err.message)
const statusCode = err.statusCode || 5000;
return res.status(statusCode).json({
    success : false,
    message: err.message || 'Server Error'
})
}