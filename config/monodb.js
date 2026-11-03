import mongoose from "mongoose"

 const connect = async() =>{
    try {
         await mongoose.connect('mongodb://localhost:27017/studentDB');
         console.log('mongodb connect succcessully')
    } catch (error) {
        console.log(`server error ${error.message}`)
    }
  
}
export default connect;