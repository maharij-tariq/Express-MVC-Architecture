import mongoose from "mongoose";
const connectionDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongodb connected successfully')
    } catch (error) {
        console.error('Server Error', error.message)
    }

}
export default connectionDB;